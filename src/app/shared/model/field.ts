export class Field {

    public id: string;

    public type: string = 'text';

    public name: string;

    public labelTxt: string;

    public placeholderTxt: string;

    public value: string = '';

    public min: string = '0';

    public max: string;

    public step: string = '1';

    constructor(fieldMap?: any) {
        this.id = fieldMap.id;
        this.type = fieldMap.type;
        this.name = fieldMap.name;
        this.labelTxt = fieldMap.labelTxt;
        this.placeholderTxt = fieldMap.placeholderTxt;
        this.value = fieldMap.value;
        this.min = fieldMap.min;
        this.max = fieldMap.max;
        this.step = fieldMap.step;
    }
}
