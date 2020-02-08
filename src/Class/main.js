import classTushar from "./classTushar";

export default class main {
 
  constructor() {
      console.log("Main");
  }

  onPageLoad() {
      let classTusharObj = new classTushar();
      classTusharObj
                 .publicMethodDemo();
  }
}

export function onPageLoadEvent() {
    let mainObj = new main();
    mainObj.onPageLoad();
    
}