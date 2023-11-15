class Hand {
    static readonly HANDVALUE_GUU: number = 0; //　グーを表す値
    static readonly HANDVALUE_CHO: number = 1; // チョキを表す値
    static readonly HANDVALUE_PAA: number = 2; // パーを表す値

    // じゃんけんの手を表す3つのインスタンス
    public static readonly hand: Hand[] = [ 
        new Hand(this.HANDVALUE_GUU), 
        new Hand(this.HANDVALUE_CHO), 
        new Hand(this.HANDVALUE_PAA)
    ];

    // じゃんけんの手の文字列表現
    private static readonly names: string[] = [
        "グー", "チョキ", "パー"
    ]

    // じゃんけんの手の値
    private handvalue: number;

    // コンストラクタ
    constructor(handvalue: number) {
        this.handvalue = handvalue;
    }

    // じゃんけんの手の値からインスタンスを得る
    public static getHand(handvalue: number): Hand {
        return this.hand[handvalue];
    }

    // thisがhより強い場合true
    public isStrongerThan(h: Hand): boolean {
        return this.fight(h) == 1;
    }

    // thisがhより弱い場合true
    public isWeakerThan(h: Hand): boolean {
        return this.fight(h) == -1;
    }   

    // 引き分けは0、thisの勝ちなら1、hの勝ちなら-1
    private fight(h: Hand): number {
        if (this == h) {
            return 0;
        // thisの手の値に +1 したものが、　hの手の値であれば勝ち
        // 例えば、thisの手がグー(0)の場合、hの手はチョキ(1)であれば勝ち
        // 例えば、thisの手がグー(0)の場合、hの手はパー(2)であれば負け
        // 余剰をとっている理由は、パー(2)に1を足した時にグー(0)になるようにするため
        } else if ((this.handvalue + 1) % 3 == h.handvalue) {
            return 1;
        } else {
            return -1;
        }
    }

    // 文字列表現へ変換
    public toString(): string {
        return Hand.names[this.handvalue];
    }

}