exports.getAnonymous = (name, alias, affiliation) => {
    return new Anonymous(name, alias, affiliation);
}
let Anonymous = class {
    #c_name;
    #c_alias;
    #c_affiliation;
    constructor(name, alias, affiliation) {
        this.#c_name = name;
        this.#c_alias = alias;
        this.#c_affiliation = affiliation;
    }
    get name() {
        return this.#c_name;
    }
    get alias() {
        return this.#c_alias;
    }
    get affiliation() {
        return this.#c_affiliation;
    }
}