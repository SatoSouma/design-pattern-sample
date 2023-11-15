abstract class Strategy {
    //「次に出すてを得る」ためのメソッド、このメソッドは呼ばれると、Strategyクラスが実装されたクラスでは、知恵を振り絞って「次の一手」を決める
    public abstract nextHand(): Hand;

    // 「さっき出した手によってじゃんけんに勝利したか」を記憶するためのメソッド
    // nextHandメソッドで勝利した場合、study(true)として呼び出される
    public abstract study(win: boolean): void;
}