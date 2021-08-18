import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { DocumentData } from '@google-cloud/firestore';


@Controller('api/book')
export class BookController {
    constructor(private readonly bookService : BookService) {}

    @Get()
    async findAll(): Promise<DocumentData[]> {
        return this.bookService.findAll();
    }

    @Post()
    create(@Body() data : CreateBookDto) : Promise<DocumentData> {
        return this.bookService.create(data);
    }

    @Get(':id')
    findOne(@Param('id') id: string) : Promise<DocumentData> {
        return this.bookService.getBook(id);
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() data: CreateBookDto){
        return this.bookService.updateBook(id, data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) : Promise<string> {
        return this.bookService.deleteBook(id);
    }
}
