import { Product } from "./framework/Product";
import { MessageBox } from "./MessageBox";
import { UnderlinePen } from "./UnderlinePen";
import { Manager } from "./framework/Manager";

class MainPrototype {
    public static main(): void {
        const manager:Manager = new Manager();
        const upen: UnderlinePen = new UnderlinePen('~');
        const mbox:MessageBox = new MessageBox('*');
        const sbox:MessageBox = new MessageBox('/');
        manager.register('strong message', upen);
        manager.register('warning box', mbox);
        manager.register('slash box', sbox);

        const p1 : Product= manager.create('strong message');
        p1.use("Hello,world.")
        const p2 : Product = manager.create('warning box');
        p2.use("Hello,world.")
        const p3 : Product = manager.create('slash box');
        p3.use("Hello,world.")
    }
}

MainPrototype.main();