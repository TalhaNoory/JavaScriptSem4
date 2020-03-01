function logger(a:number,b:string) {
    console.log(`Number Value 1: ${a}, String Value 2: ${b}`)
}

let a = 12;
let b = "Hello World";
logger(a,b)
//# sourceMappingURL=logger.js.map

interface IPerson {name:string}
//Eksempel på optional!
interface IPersonV2{firstName:string, lastName:string, phone?:string}
let personV2 = {firstName:"hej", lastName:"med", phone:"dig"}

/*-------------------------------------------------------------*/
interface IAddress {address:string}

function loggerV2(a:IPerson,b:IAddress) {
    console.log(`Person: ${JSON.stringify(a)}, Address: ${b.address}`)
}

//const person = {name:"Sten"}
//eksempel
let person2:IPerson;
person2 = {name:"Hans"}
let address = {address: "LynbyVej 34"}
loggerV2(person2, address)

class Person implements IPerson {
    constructor(private _name:string){};
    get name(){return this.name}
    set name(val:string){ this._name = val}
}

let person3 = new Person("Hans Hansen");

person3.name = "Ulrik Hansen"
loggerV2(person3, address)

function loggerV3<T,U>(a:T,b:U) {
    console.log(`Val1: ${JSON.stringify(a)}, Val2: ${JSON.stringify(b)}`)
}

loggerV3(a,b)

class GenericLogger<T,U> {
    log = (a:T,b:U) => console.log(`Val1: ${JSON.stringify(a)}, Val2: ${JSON.stringify(b)}`)
}

const logger1 = new GenericLogger<number, string>();
const logger2 = new GenericLogger<IPerson, IAddress>();

logger1.log(a,b);
logger2.log(person2, address);

let my_numbers: Array<number> = [1,2,3]
let my_numbers1: Array<boolean> = [true]
let my_numbers2: Array<IPerson> = []
let my_numbers3: Array<string> = ["hej", "Ulrik"]
