import { Factory } from "../framework/Factory";
import { Product } from "../framework/Product";
import { IDCard } from "./IDCard";

export class IDCardFactory extends Factory {
    private owners: string[] = [];

    // 「製品を作成する」　具体的な処理、具体的な製品を表す IDCard クラスを返却している
    protected createProduct(owner: string): Product {
        return new IDCard(owner);
    }
    // 「製品を登録する」　具体的な処理、IDCard クラスの getOwner メソッドを使用して、所有者を配列に追加している
    protected registerProduct(product: Product): void {
        this.owners.push(product.getOwner());
    }
    
    getOwners(): string[] {
        return this.owners;
    }
}