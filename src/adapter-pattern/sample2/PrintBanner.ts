import { Banner } from "../utils/Banner";
import { Print } from "./Print";

/**
 * Printクラスを継承して行うので、Bannerクラスも継承して２つクラスを継承するようなやり方はできない。
 * Bannerクラスはインスタンス化して、Bannerクラスに処理を委譲するような形で実装する。
 */
export class PrintBanner extends Print {
    private banner: Banner;
    constructor(string: string) {
        super();
        this.banner = new Banner(string);
    }
    printWeak():void {
        this.banner.showWithParen();
    }
    printStrong():void {
        this.banner.showWithAster();
    }
}