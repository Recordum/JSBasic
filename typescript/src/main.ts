import { Person } from "./Person";
import { Pet } from "./Pet";

function sayHello(name: string): void {
  console.log(`Hello ${name}!\n`);
}
const CAT: String = "cat";
const DOG: String = "dog";
let owner: Person = new Person("mingyu", 28);
let myPet: Pet = new Pet(3, CAT);
let notMyPet: Pet = new Pet(5, DOG);

myPet.$ownerName = owner.$name;

sayHello(owner.$name);

owner.introduceMyPet(myPet);
owner.introduceMyPet(notMyPet);
console.log(owner.getAge());