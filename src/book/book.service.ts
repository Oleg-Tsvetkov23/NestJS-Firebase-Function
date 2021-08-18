import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { db } from './firebase';
import { DocumentData } from '@google-cloud/firestore';

@Injectable()
export class BookService {

    async findAll() : Promise<DocumentData[]> {
        const res = await db.collection('books').get();
        let books = [];
        res.forEach(data => {
            books.push({
                id : data.id,
                title : data.get('title'),
                description : data.get('description'),
                authors : data.get('authors'),
                favorite : data.get('favorite'),
                fileCover : data.get('fileCover')
            });
        });
        return books;
    }

    async create(create_book:CreateBookDto): Promise<DocumentData> {
        const dref = await db.collection('books').add(create_book);
        return {
            id : dref.id,
            title : create_book.title,
            description : create_book.description,
            authors : create_book.authors,
            favorite : create_book.favorite,
            fileCover : create_book.fileCover
        }
    }

    async getBook(id:string) : Promise<DocumentData> {
        const res = await db.collection('books').doc(id).get();
        if (res.exists) return res.data();
        else {
            throw new NotFoundException();
        }
    }

    async updateBook(id:string, data:CreateBookDto) : Promise<DocumentData> {
        const dRef = db.collection('books').doc(id)      
        try {
            const res = await dRef.update(data);
            return {
                id : id,
                title : data.title,
                description : data.description,
                authors : data.authors,
                favorite : data.favorite,
                fileCover : data.fileCover
            }
        }
        catch(err) {
            throw new NotFoundException();
        }
    }

    async deleteBook(id:string) : Promise<string> {
        const dRef = db.collection('books').doc(id).get()
        if ((await dRef).exists) {
            db.collection('books').doc(id).delete();
            return "Ok";
        }
        else {
            throw new NotFoundException();
        }
   }
}
