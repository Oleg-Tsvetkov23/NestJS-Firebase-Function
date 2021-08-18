import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
 
import { AppModule } from './app.module';
 
const expressServer = express();
 
const createFunction = async (expressInstance): Promise<void> => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
 
  await app.init();
};
 
export const api = functions.region('europe-west1')
  .https.onRequest(async (request, response) => {
    await createFunction(expressServer);
    expressServer(request, response);
  });


export const moderator = functions.firestore.document('books/{booksID}').onWrite((change) => {
  const mes = change.after.data();
  if (mes.description === undefined || mes.description.length === 0) {
    const moderateMessage = 'Скоро здесь будет описание…'
    return change.after.ref.update({description : moderateMessage});
  }
  return null;
})

