class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(value) {
        let node = new Node(value);
        if (this.length === 0)
            this.head = node;
        else {
            let list = this.head;
            while (list.next)
                list = list.next;
            list.next = new Node(value);
        }
        this.length++;
    }
    remove(value) {
        if (this.head.data === value) {
            this.head = this.head.next;
            this.length--;
            return true;
        } else
            for (let list = this.head; list.next; list = list.next)
                if (list.next.data === value) {
                    list.next = list.next.next;
                    this.length--;
                    return true;
                }
        return false;
    }
    contains(value) {
            for (let list = this.head; list; list = list.next)
                if (list.data === value)
                    return true;
            return false;
        }
        [Symbol.iterator] = () => {
            let tmp = this.head;
            return {
                next() {
                    if (tmp) {
                        let value = tmp.data;
                        tmp = tmp.next;
                        return {
                            value: value,
                            done: false
                        };
                    }
                    return {
                        done: true
                    };
                }
            };
        };
    clear() {
        this.head = null;
    }
    count() {
        return this.length;
    }
    log() {
        let res = '';
        for (let list = this.head; list; list = list.next) {
            res += list.data;
            if (list.next)
                res += ', ';
        }
        console.log(res);
    }
}

let createLinkedList = (arr) => {
    const list = new List();
    arr.forEach(value => list.add(value));
    return list;
}