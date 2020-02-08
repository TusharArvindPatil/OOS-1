import salesAbstraction from "../Abstractions/salesAbstraction";

import goldCustomer from "./goldCustomer";
import platinumCustomer from "./platinumCustomer";
import silverCustomer from "./silverCustomer";

export default class customerContext {

    static async discountCalculation(){
        let salesAbstractionObj = null;
       try{
       
       return await new Promise(async (resolve)=>{
        salesAbstractionObj = new salesAbstraction();

        if(salesModel.customer.custmerType === "silver"){
            salesAbstractionObj = new silverCustomer();
        }  else if(salesModel.customer.custmerType === "gold"){
            salesAbstractionObj = new goldCustomer();
        }  else if(salesModel.customer.custmerType === "platinum"){
            salesAbstractionObj = new platinumCustomer();
        }

        salesModel = await salesAbstraction.discountCalculation(salesModel);

        return resolve(salesModel);
    });

       }
       catch (ex){
         throw ex;
       }
    }
}