export class Pet {
    private kind: String;
    private ownerName: String = "";

    constructor($age: number, $kind: String) {
        this.kind = $kind;
    }


    /**
     * Setter $ownerName
     * @param {String } value
     */
	public set $ownerName(value: String ) {
		this.ownerName = value;
	}

    /**
     * Getter $ownerName
     * @return {String }
     */
	public get $ownerName(): String  {
		return this.ownerName;
	}


    /**
     * Getter $kind
     * @return {String}
     */
    public get $kind(): String {
        return this.kind;
    }

}