"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    get $name() {
        return this.name;
    }
    get $age() {
        return this.age;
    }
    set $name(value) {
        this.name = value;
    }
    set $age(value) {
        this.age = value;
    }
    introduceMyPet($myPet) {
        if ($myPet.$ownerName == this.$name) {
            console.log("It's my " + $myPet.$kind);
            return;
        }
        console.log("It is not my pet");
    }
    getAge() {
        return this.age;
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map