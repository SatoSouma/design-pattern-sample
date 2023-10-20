class WinnigStrategy implements Strategy {
    private won: boolean = false;
    private prevHand: Hand = new Hand(0); // 前回出した手の値

    // じゃんけんに勝利したら、次の手は前回出した手を出す
    public nextHand(): Hand {
        if (!this.won) {
            this.prevHand = Hand.getHand(Math.floor(Math.random() * 3));
        }
        return this.prevHand;
    }

    public study(win: boolean): void {
        this.won = win;
    }
}