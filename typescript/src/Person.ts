import { Pet } from "./Pet";

export class Person {

    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

    /**
     * Getter $name
     * @return {string}
    */
    public get $name(): string {
        return this.name;
    }

    /**
     * Getter $age
     * @return {number}
     */
    public get $age(): number {
        return this.age;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    /**
     * Setter $age
     * @param {number} value
     */
    public set $age(value: number) {
        this.age = value;
    }

    public introduceMyPet($myPet: Pet): void {
        if ($myPet.$ownerName == this.$name) {
            console.log("It's my " + $myPet.$kind);
            return;
        }

        console.log("It is not my pet");
    }

    public getAge(): number {
        return this.age;
    }
}