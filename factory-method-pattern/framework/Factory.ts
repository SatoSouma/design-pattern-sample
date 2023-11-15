import { Product } from './Product';
// Template Method Pattern を使用して実装されているクラス

export abstract class Factory {
  // Template Method に当たるメソッド
  // 抽象メソッドを使用して、製品がどんな流れで「作成」されるかの枠組みを定めている
  public create(owner: string): Product {
    const p = this.createProduct(owner);
    this.registerProduct(p);
    return p;
  }

  // 「製品を作成する」 ための抽象メソッド、具体的な処理はサブクラスに任せている
  // 製品を表すインスタンスを作成して返却しているだけで、サブクラスにおいても共通の処理として使用される部分なので
  // この抽象クラスで具体的な実装を施しても良いんですが、その場合こんな形になると思います
  // protected createProduct(owner: string): Product　{
    //   return new Product　(owner);
  // }
  // このとき、Product　クラスを　new していますが、今回Product　クラスは抽象クラスなのでインスタンス化できません
  // Product　クラスを抽象クラスとして扱いたい場合(仕様などの定義をした方がやりやすいなど)は、サブクラスに具体的な処理を任せるのが良いと思います
  protected abstract createProduct(owner: string): Product;
  // 「製品を登録する」 ための抽象メソッド、具体的な処理はサブクラスに任せている
  protected abstract registerProduct(product: Product): void;
}