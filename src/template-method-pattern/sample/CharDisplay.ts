import { AbstractDisplay } from "./AbstractDisplay";

// このクラスで、Hを引数としてdisplayメソッドを呼び出すと、 <<HHHHH>> と出力されます
export class CharDisplay extends AbstractDisplay {
  private ch: string;

  constructor(ch: string) {
    super();
    this.ch = ch;
  }

  // スーパークラスでは抽象メソッドとして定義されていたメソッド
  // ここでは具体的な処理が実装されており、 << を出力するような処理が実装されている
  open(): void {
    process.stdout.write('<<');
  }

  // スーパークラスでは抽象メソッドとして定義されていたメソッド
  // ここでは具体的な処理が実装されており、引数で渡された文字を出力するような処理が実装されている
  print(): void {
    process.stdout.write(this.ch);
  }

  // スーパークラスでは抽象メソッドとして定義されていたメソッド
    // ここでは具体的な処理が実装されており、 >> を出力するような処理が実装されている
  close(): void {
    process.stdout.write('>>\n');
  }
}