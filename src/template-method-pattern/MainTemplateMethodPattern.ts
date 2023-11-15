import { AbstractDisplay } from "./AbstractDisplay"
import { CharDisplay } from "./CharDisplay";
import { StringDisplay } from "./StringDisplay";

class MainTemplateMethodPattern {
    public static main(): void {
        const d1 : AbstractDisplay = new CharDisplay('H');
        const d2 : AbstractDisplay = new StringDisplay('Hello, world.');
        const d3 : AbstractDisplay = new StringDisplay('こんにちは。');

        // AbstractDisplayクラスを継承しているので、すべてのサブクラスでdisplayメソッドを呼び出すことができます
        d1.display();
        d2.display();
        d3.display();
    }
}

MainTemplateMethodPattern.main()