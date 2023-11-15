import { AbstractDisplay } from "./AbstractDisplay";


export class StringDisplay extends AbstractDisplay{

    private string: string;
    private width: number;

    constructor(string: string) {
        super();
        this.string = string;
        this.width = string.length;
    }

    // スーパークラスでは抽象メソッドとして定義されていたメソッド
    // ここでは具体的な処理が実装されており、 printLine メソッドを使用して +----+ のような線を出力する処理が実装されている
    open(): void {
        this.printLine();
    }

    // スーパークラスでは抽象メソッドとして定義されていたメソッド
    print(): void {
        console.log(`|${this.string}|`);
    }

    // スーパークラスでは抽象メソッドとして定義されていたメソッド
    // ここでは具体的な処理が実装されており、 printLine メソッドを使用して +----+ のような線を出力する処理が実装されている
    close(): void {
        this.printLine();
    }

    // 引数の文字の長さに合わせて、+----+ のような線を出力するメソッド
    private printLine(): void {
        let line = "";
        for (let i = 0; i < this.width; i++) {
            line += "-";
        }
        console.log(`+${line}+`);
    }

}