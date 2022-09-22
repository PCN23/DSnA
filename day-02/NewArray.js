class NewArray {
    #list = [];

    constructor(firstList) {
        if (firstList) this.#list = firstList;
    }

    reverse() {
        this.#list.reverse();
    }

    get arrayNow() {
        return this.#list;
    }
}

module.exports = { NewArray };