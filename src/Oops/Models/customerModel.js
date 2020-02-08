const _customerType = Symbol("_customerType");

export default class customerModel {

    get customerType(){
        return this[_customerType];

    }

    set customerType() {
       this[_customerType] = value;
    }
 
    toJSON() {
        return {
            customerType: this.customerType
        }
    }


}
