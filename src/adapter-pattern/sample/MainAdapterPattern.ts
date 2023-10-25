import { PrintBanner } from "./2/PrintBanner";
import { Print } from "./2/Print";

/**
 * ここで重要なのは、Mainは Printインターフェースを使用して実装しており、showWithParen showWithAster は全く見えていないと言う事です。
 * 直流 12V(Printインターフェース)さえ提供してもらえば、という状態で、 直流12Vが提供されているようにみえており、
 * 本当は交流 100V(Bannerクラス)が提供されている事なんて、全くわからない実装になっています、
 * PrintBannerクラスがどのように変換を実現しているかを Mainクラスは全く知らないので
 * つまりこの状態であれば、処理を変更する時に、Mainクラスを全く変更せずに PrintBannerを変更するだけで済んでしまうという事です。
 */
class MainAdapterPattern {
    public static main(): void {
        const p : Print = new PrintBanner("Hello");
        p.printWeak();
        p.printStrong();
    }
}

MainAdapterPattern.main();