import { Product } from "./framework/Product";

/**
 * 具体的な製品を表すクラス
 */
export class UnderlinePen implements Product {
    private ulchar: string;
    constructor(ulchar: string) {
        this.ulchar = ulchar;
    }
    use(s: string): void {
        const length = s.length;
        process.stdout.write(`"${s}"\n`);
        process.stdout.write(" ");
        for (let i = 0; i < length; i++) {
            process.stdout.write(this.ulchar);
        }
        process.stdout.write("\n");
    }

    createClone(): Product {
        return Object.create(this);
    }
}