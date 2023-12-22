import { Product } from "./framework/Product";

/**
 * 具体的な製品を表すクラス
 */
export class MessageBox implements Product {
  private decoChar: string;

  constructor(decoChar: string) {
    this.decoChar = decoChar;
  }

  use(s: string): void {
    const length = s.length;
    for (let i = 0; i < length + 4; i++) {
      process.stdout.write(this.decoChar);
    }
    process.stdout.write("\n");
    process.stdout.write(`${this.decoChar} ${s} ${this.decoChar}\n`);
    for (let i = 0; i < length + 4; i++) {
      process.stdout.write(this.decoChar);
    }
    process.stdout.write("\n");
  }

  createClone(): Product {
    return Object.create(this);
  }
}