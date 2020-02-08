import salesAbstraction from "../Abstractions/salesAbstraction";

export default class silverCustomer extends salesAbstraction {


   async discountCalculation(salesModal) {
       super.dummy();``
        try{

            return await new Promise((resolve)=>{
                 let result = salesModal.amount * 10 / 100;
                  salesModal.discountCalculation = result;
                
                return resolve(salesModal);
            });

        }
        catch (ex) {
        throw ex;
        }
    }
}
 