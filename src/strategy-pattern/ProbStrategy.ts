class ProbStrategy implements Strategy{
    private prevHandValue: number = 0;
    private currentHandValue: number = 0;
    // history[前回の手][今回の手]の勝敗の履歴
    // この値が大きいほど、過去の勝率が高い
    // 例えば、history[0][0]は、前回の手がグー、今回の手がグーの場合の勝敗の履歴
    // 例えば、history[0][1]は、前回の手がグー、今回の手がチョキの場合の勝敗の履歴
    // 例えば、history[0][2]は、前回の手がグー、今回の手がパーの場合の勝敗の履歴
    private history: number[][] = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];

    public nextHand(): Hand {
        const bet: number = Math.floor(Math.random() * this.getSum(this.currentHandValue));
        let handValue: number = 0;
        if (bet < this.history[this.currentHandValue][0]) {
            handValue = 0;
        }else if(bet < this.history[this.currentHandValue][0] + this.history[this.currentHandValue][1]){
            handValue = 1
        }else{
            handValue = 2
        }

        this.prevHandValue = this.currentHandValue;
        this.currentHandValue = handValue;
        return Hand.getHand(handValue);
    }

    private getSum(hv: number): number {
        let sum: number = 0;
        for (let i: number = 0; i < 3; i++) {
            sum += this.history[hv][i];
        }
        return sum;
    }

    public study(win: boolean): void {
        if(win){
            this.history[this.prevHandValue][this.currentHandValue]++;
        }else{
            this.history[this.prevHandValue][(this.currentHandValue + 1) % 3]++;
            this.history[this.prevHandValue][(this.currentHandValue + 2) % 3]++;
        }
    }
}