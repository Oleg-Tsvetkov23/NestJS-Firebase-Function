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
  functions.logger.info("Trigger");
  const mes = change.after.data();
//  const mes = change.after.data();
//    console.log("mes",mes.description);
//    functions.logger.info("---------->");
  functions.logger.log('Hallo', mes); 
//    return null;
  return null;
})

