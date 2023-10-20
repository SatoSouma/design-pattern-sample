import { Book } from "./Book";
import { BookShelf } from "./BookShelf";
import { Iterator } from "./Iterator";

class MainIteratorPattern {
    public main(): void {
        try {
            const bookShelf: BookShelf = new BookShelf(4);
            bookShelf.appendBook(new Book("Around the World in 80 Days"));
            bookShelf.appendBook(new Book("Bible"));
            bookShelf.appendBook(new Book("Cinderella"));
            bookShelf.appendBook(new Book("Daddy-Long-Legs"))

            // Concrete Iterator を返す
            const it:Iterator = bookShelf.iterator();
            while(it.hasNext()){
                const book:Book = it.next() as Book;
                console.log(book.getName());
            }
        }catch(error){
            console.log(error);
        }
    }
}

const mainIteratorPattern = new MainIteratorPattern();
mainIteratorPattern.main();
