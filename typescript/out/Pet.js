"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
class Pet {
    constructor($age, $kind) {
        this.ownerName = "";
        this.kind = $kind;
    }
    set $ownerName(value) {
        this.ownerName = value;
    }
    get $ownerName() {
        return this.ownerName;
    }
    get $kind() {
        return this.kind;
    }
}
exports.Pet = Pet;
//# sourceMappingURL=Pet.js.map