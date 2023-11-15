import { Book } from "./Book";
import { BookShelf } from "./BookShelf";
import { Iterator } from "./Iterator";

class MainIteratorPattern {
    public main(): void {
        const bookShelf: BookShelf = new BookShelf();
        bookShelf.appendBook(new Book("Around the World in 80 Days"));
        bookShelf.appendBook(new Book("Bible"));
        bookShelf.appendBook(new Book("Cinderella"));
        bookShelf.appendBook(new Book("Daddy-Long-Legs"))
        
        // Concrete Iterator を返す
        // Iteratorの中身の具体的な実装には関わってこない
        const it:Iterator = bookShelf.iterator();
        while(it.hasNext()){
            const book:Book = it.next() as Book;
            console.log(book.getName());
        }
    }
}

const mainIteratorPattern = new MainIteratorPattern();
mainIteratorPattern.main();
