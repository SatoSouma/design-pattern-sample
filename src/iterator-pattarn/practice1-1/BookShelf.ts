import { Aggregate } from './Aggregate';
import { Book } from './Book';
import { BookShelfIterator } from './BookShelfIterator';
import { Iterator } from './Iterator';

export class BookShelf implements Aggregate{
    private books: Book[];
    private lastIndex: number = 0;

    constructor() {
        this.books = new Array();
    }

    public getBookAt(index: number): Book {
        return this.books[index];
    }

    public appendBook(book: Book): void {
        this.books[this.lastIndex] = book;
        this.lastIndex++;
    }

    public getLength(): number {
        return this.lastIndex;
    }

    public iterator(): Iterator {
        return new BookShelfIterator(this);
    }
}