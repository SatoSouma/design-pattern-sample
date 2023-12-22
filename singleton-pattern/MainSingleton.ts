import { Singleton } from './Singleton';

class MainSingleton {
    public static main(): void {
        const singleton1: Singleton = Singleton.getInstance();
        const singleton2: Singleton = Singleton.getInstance();

        if (singleton1 === singleton2) {
            console.log('singleton1 and singleton2 are the same instance.');
        } else {
            console.log('singleton1 and singleton2 are not the same instance.');
        }
    }
}

MainSingleton.main();