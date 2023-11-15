import { Product } from "../framework/Product";

// 具体的な製品を実装するクラス
// 認識番号カードを表すクラス
export class IDCard extends Product {
    constructor(owner: string) {
        super(owner);
        console.log(`${owner}のカードを作ります。`);
    }

    // 具体的な処理を実装する
    use(): void {
        console.log(`${this.owner}のカードを使います。`);
    }
}