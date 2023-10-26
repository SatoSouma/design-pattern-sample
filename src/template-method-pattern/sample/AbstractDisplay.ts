export abstract class AbstractDisplay {
    // open print close は抽象メソッドで定義されており、サブクラスで具体的な処理が実装されます
    abstract open():void;
    abstract print():void;
    abstract close():void;

    // このメソッドはオーバーライド禁止にしたいのですが、禁止にするような修飾子が存在しないので、
    // 絶対にオーバーライドをしないことをここに明記します
    // このメソッドはスーパークラスで実装されており、抽象メソッドをどのように使用するかを示しているので
    // ここで抽象メソッドの具体的な処理は掴めずとも、枠組みを定義していることはわかります
    public display():void {
        this.open();
        for (let i = 0; i < 5; i++) {
            this.print();
        }
        this.close();
    }
}