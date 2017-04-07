export class Option {

    public value: string;

    public txt: string;

    public selected: boolean;

    constructor(value: string, txt: string, selected: boolean = false) {
        this.value = value;
        this.txt = txt;
        this.selected = selected;
    }
}
