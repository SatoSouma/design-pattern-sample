/**
 * 「すでに提供されているもの」を「必要なもの」に変換するクラス
 *  Bannerクラスで提供されている機能を、今回必要なメソッドである、printWeakとprintStrongで提供する。
 * 「必要なもの」はPrintインターフェースで定められているので、それに則って実装する。
 */

import { Print } from "./Print";
import { Banner } from "../utils/Banner";

export class PrintBanner extends Banner implements Print {
    constructor(string: string) {
        super(string);
    }
    printWeak():void {
        this.showWithParen();
    }
    printStrong():void {
        this.showWithAster();
    }
}