import salesAbstraction from "../Abstractions/salesAbstraction";

export default class platinumCustomer extends salesAbstraction {


   async discountCalculation(salesModal) {
        try{

            return await new Promise((resolve)=>{
                 let result = salesModal.amount * 30 / 100;
                  salesModal.discountCalculation = result;
                
                return resolve(salesModal);
            });

        }
        catch (ex) {
        throw ex;
        }
    }
}