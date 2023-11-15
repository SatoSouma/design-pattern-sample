/**
 * これが、必要な物のためのインターフェース
 * 必要な物を実装するクラスは、このインターフェースを実装する
 */
export interface Print {
    // 文字列に "" をつけて表示するような処理
    printWeak(): void;
    // 文字列に ** をつけて表示するような処理
    printStrong(): void;
}