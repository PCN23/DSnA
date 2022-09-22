class Stack {
    #list = [];

    constructor(firstList) {
        if(firstList);
        this.#list = firstList;
    }
    push(item) {
        this.#list.push(item);
    }

    pop() {
        this.#list.pop();
    }

    get arrayNow() {
        return this.#list;
    }
}

module.exports = { Stack };
