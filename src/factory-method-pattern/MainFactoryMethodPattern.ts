import { IDCardFactory } from "./idcard/IDCardFactory";
import { Factory } from "./framework/Factory";

export class MainFactoryMethodPattern {
    static main(): void {
        const chobiit = new IDCardFactory();

        // chobiitを利用するためのIDカードを作成
        const chobiitCard1 = chobiit.create("soma");
        const chobiitCard2 = chobiit.create("musashi");
        const chobiitCard3 = chobiit.create("toshiie");

        chobiitCard1.use();
        chobiitCard2.use();
        chobiitCard3.use();

        // chobiit の利用者を表示
        console.log("-------------------------")
        chobiit.getOwners().forEach((owner) => {
            console.log(owner);
        });
        console.log("-------------------------")
    }
}

MainFactoryMethodPattern.main();