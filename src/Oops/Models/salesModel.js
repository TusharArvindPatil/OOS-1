const _amount = Symbol("_amount");
const _customerModel = Symbol("_customerModel");
const _discountAmount = Symbol("_discountAmount");
export default class salesModel {

    get amount(){
        return this[_amount];

    }

    set amount() {
       this[_amount] = value;
    }

    get customer(){
        return this[_customerModel];

    }

    set customer() {
       this[_customerModel] = value;
    }

   

    get discountAmount(){
      return this[_discountAmount];
    }
    set discountAmount(value){
     this[_discountAmount] = value;
    }


    toJSON() {
        return {
            amount: this.amount,
            customer: this.customer
        }
    }

}