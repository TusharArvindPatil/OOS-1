
const privateMethodDemo = Symbol("privateMethodDemo");

export default class classTushar{

    constructor() {
        console.log("constructor");
    }

    [privateMethodDemo]() {
        console.log("Private");
    }
    publicMethodDemo() {
        console.log("Public");

        this[privateMethodDemo]();
    }


}