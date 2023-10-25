/**
 * 先の例で言えば「交流100V」のAC電源であり、すでに提供されている物にあたります。
 */
export class Banner {
    private string: string;
    constructor(string: string) {
        this.string = string;
    }  
    
    public showWithParen(): void {
        console.log(`("${this.string}")`);
    }

    public showWithAster(): void {
        console.log(`*${this.string}*`);
    }
}