"use strict";
function logger(a, b) {
    console.log(`Number Value 1: ${a}, String Value 2: ${b}`);
}
let a = 12;
let b = "Hello World";
logger(a, b);
let personV2 = { firstName: "hej", lastName: "med", phone: "dig" };
function loggerV2(a, b) {
    console.log(`Person: ${JSON.stringify(a)}, Address: ${b.address}`);
}
//const person = {name:"Sten"}
//eksempel
let person2;
person2 = { name: "Hans" };
let address = { address: "LynbyVej 34" };
loggerV2(person2, address);
class Person {
    constructor(_name) {
        this._name = _name;
    }
    ;
    get name() { return this.name; }
    set name(val) { this._name = val; }
}
let person3 = new Person("Hans Hansen");
person3.name = "Ulrik Hansen";
loggerV2(person3, address);
function loggerV3(a, b) {
    console.log(`Val1: ${JSON.stringify(a)}, Val2: ${JSON.stringify(b)}`);
}
loggerV3(a, b);
class GenericLogger {
    constructor() {
        this.log = (a, b) => console.log(`Val1: ${JSON.stringify(a)}, Val2: ${JSON.stringify(b)}`);
    }
}
const logger1 = new GenericLogger();
const logger2 = new GenericLogger();
logger1.log(a, b);
logger2.log(person2, address);
let my_numbers = [1, 2, 3];
let my_numbers1 = [true];
let my_numbers2 = [];
let my_numbers3 = ["hej", "Ulrik"];
//# sourceMappingURL=logger.js.map