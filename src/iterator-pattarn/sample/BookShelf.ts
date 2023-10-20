import { Aggregate } from './Aggregate';
import { Book } from './Book';
import { BookShelfIterator } from './BookShelfIterator';
import { Iterator } from './Iterator';

export class BookShelf implements Aggregate{
    private books: Book[];
    private last: number = 0;
    private arrayLength: number = 0;

    constructor(maxSize: number) {
        // js は可変長配列しかないので、配列の長さを表すフィールドを追加する
        this.books = new Array();
        this.arrayLength = maxSize;
    }

    public getBookAt(index: number): Book {
        return this.books[index];
    }

    public appendBook(book: Book): void {
        if(this.last <= this.arrayLength){
            this.books[this.last] = book;
            this.last++;
        }else{
            throw new Error("The array is full.");
        }
    }

    public getLength(): number {
        return this.last;
    }

    public iterator(): Iterator {      
        return new BookShelfIterator(this);
    }
}