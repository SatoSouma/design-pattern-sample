import { Product } from "./Product"

/**
 * インスタンスを登録しておくクラス
 * createメソッドを使用すると、キーに合致する登録されているインスタンスの複製を生成する
 * product インターフェースの createClone メソッドを使用しているので、productインターフェースを実装しているクラスのみ登録可能
 */
export class Manager {
    private showCase = new Map<string, Product>()

    register(name: string, proto: Product): void {
        this.showCase.set(name, proto)
    }

    create(protoName: string): Product {
        const p: Product | undefined = this.showCase.get(protoName)
        if (p === undefined) {
            throw new Error('prototype is not registered.')
        }
        return p.createClone()
    }
}