"use strict";
class HardWorker {
    WorkerName;
    WorkerAge;
    WorkerSalary;

    get name() {
        return this.WorkerName;
    }

    set name(value) {
        this.WorkerName = value;
    }

    set age(value) {
        if (1 <= value && value < 100)
            this.WorkerAge = value;
    }

    set salary(value) {
        if (100 <= value && value < 10000)
            this.WorkerSalary = value;
    }

    toObject() {
        let obj = new Object();
        obj.name = this.WorkerName;
        obj.age = this.WorkerAge;
        obj.salary = this.WorkerSalary;
        return obj;
    }
}