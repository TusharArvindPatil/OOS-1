import customerContext from "../BussinessLogics/customerContext";
import customerModel from "../Models/customerModel";
import salesModel from "../Models/salesModel";

const getSalesUiDate = Symbol("getSaledUiDate");
const _salesModerObj = Symbol("_salesModel");

export default class salesController{
  constructor(_salesModer = null){
      this.[_salesModerObj] = salesModel;
  }


  async [getSalesUiDate]() {
      try{
       return await new Promise((resolve)=>{


        this[_salesModerObj].customer.customerType = "gold";
        this[_salesModerObj].amount=10000;

        return resolve(true);
       });       
       
       

      }
      catch (ex){
          throw ex;
      }
  }
}


async onSubmit(){
try{

    return await new Promise((resolve)=>{
await this[getSalesUiDate]();
 

let data = await customerContext.discountCalculation(this[_salesModerObj]);
     return resolve(data);
    });

}
catch (ex){
    throw ex;
}
}

export function onSubmitButtonClickEvent(){
    let salesModerObj = null;
    let salesControllerObj = null;
    let customerObj = null;
    try{
        
        customerObj = new customerModel();
        salesModerObj = new salesModel();
      salesControllerObj = new salesController(salesModerObj);

      salesModerObj.customer = customerObj;

      salesControllerObj.onSubmit.then((resolve) => console.log(resolve.discountAmount));
               
    }
    catch (ex){
        console.log(ex.message);
        console.log(ex.stack)
    }
}