/**
 *　各Product(製品)のインターフェース
 */
export interface Product {
    use(s: string): void;
    createClone(): Product;
}