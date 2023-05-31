"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const Pet_1 = require("./Pet");
function sayHello(name) {
    console.log(`Hello ${name}!\n`);
}
const CAT = "cat";
const DOG = "dog";
let owner = new Person_1.Person("mingyu", 28);
let myPet = new Pet_1.Pet(3, CAT);
let notMyPet = new Pet_1.Pet(5, DOG);
myPet.$ownerName = owner.$name;
sayHello(owner.$name);
owner.introduceMyPet(myPet);
owner.introduceMyPet(notMyPet);
console.log(owner.getAge());
//# sourceMappingURL=main.js.map