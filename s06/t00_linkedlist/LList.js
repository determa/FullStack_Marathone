const {LLData} = require("./LLData");

exports.LList = class {
    constructor() {
        this.head = null;
        this.list = null;
    }

    getFirst() {
        return this.head;
    }
    getLast() {
        return this.list;
    }

    add(value) {
        let node = new LLData(value);
        if (this.list)
            this.list.next = node;
        this.list = node;
        if (!this.head)
            this.head = node;
    }

    addFromArray(arrayOfData) {
        arrayOfData.forEach(arrayOfData => this.add(arrayOfData));
    }

    remove(value) {
        if (!this.head)
            return null;

        let head = this.head;

        if (this.head.data === value) {
            this.head = this.head.next;
            return true;
        }
        while (head.next) {
            if (head.next.data === value) {
                if (head.next === this.list)
                    this.list = head;
                head.next = head.next.next;
                return true;
            } else {
                head = head.next;
            }
        }
        return false;
    }

    removeAll(value) {
        if (!this.head)
            return null;

        let node = this.head;
        if (node !== null) {
            if (this.head.data === value) {
                this.head = this.head.next;
            }
            while (node.next) {
                if (node.next.data === value)
                    node.next = node.next.next;
                else
                    node = node.next;
            }
        }
        if (this.list.data === value) this.list = node;
    }

    contains(value) {
        if (!this.head || (value === undefined))
            return null;
        let node = this.head;
        while (node) {
            if (node.data === value)
                return true;
            node = node.next;
        }
        return false;
    }

    clear() {
        this.head = null;
        this.list = null;
    }

    count() {
        if (!this.head)
            return null;

        let count = 0;
        let node = this.head;
        while (node) {
            node = node.next;
            count++;
        }
        return count;
    }

    toString() {
        let arr = [];
        let node = this.head;
        while (node) {
            arr.push(node.data);
            node = node.next;
        }
        return arr.join(', ');
    }

    getIterator() {
        return this[Symbol.iterator]();
    }

    filter(callback) {
        let newList = Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)));
        let node = newList.head;
        while (node) {
            if (!callback(node.data))
                newList.remove(node.data);
            node = node.next;
        }
        return newList;
    }

    [Symbol.iterator]() {
        let head = this.head;
        return {
            next() {
                let value, done = true;
                if (head !== null) {
                    value = head.data;
                    done = false;
                    head = head.next;
                }
                return {
                    value: value,
                    done: done
                }
            }
        }
    }
}

const {LList} = require("./LList");