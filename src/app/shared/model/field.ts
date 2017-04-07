import { Option } from './option';

export class Field {

    public type: string = 'text';

    public name: string;

    public labelTxt: string;

    public placeholderTxt: string;

    public value: string = '';

    public checked: boolean = false;

    public min: string = '0';

    public max: string;

    public step: string = '1';

    public options: Option[];

    public rows: number;

    public cols: number;

    constructor(fieldMap?: any) {
        this.type = ( fieldMap.type ) ? fieldMap.type : this.type;
        this.name = ( fieldMap.name ) ? fieldMap.name : this.name;
        this.labelTxt = ( fieldMap.labelTxt ) ? fieldMap.labelTxt: this.labelTxt;
        this.placeholderTxt = ( fieldMap.placeholderTxt ) ? fieldMap.placeholderTxt : this.placeholderTxt;
        this.value = ( fieldMap.value ) ? fieldMap.value : this.value;
        this.checked = ( fieldMap.checked ) ? fieldMap.checked : this.checked;
        this.min = ( fieldMap.min ) ? fieldMap.min : this.min;
        this.max = ( fieldMap.max ) ? fieldMap.max : this.max;
        this.step = ( fieldMap.step ) ? fieldMap.step : this.step;
        this.options = ( fieldMap.options ) ? fieldMap.options : this.options;
    }
}
