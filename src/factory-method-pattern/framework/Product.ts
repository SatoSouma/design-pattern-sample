// 「製品」を表す抽象クラス、抽象メソッド use のみを持ち、具体的な実装はサブクラスに任せている

export abstract class Product {
  protected owner: string;
  constructor(owner: string) {
    this.owner = owner;
  }
  public abstract use(): void;
  getOwner(): string {
    return this.owner;
  }
}