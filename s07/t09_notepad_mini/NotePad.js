let fs = require('fs');

module.exports = class NotePad {
    list = [];

    constructor() {
        if (fs.existsSync('./data.json')) {
            let notes = JSON.parse(fs.readFileSync('./data.json'));
            for (let key of notes) {
                this.list.push(key);
            }
        }
    }

    add(json) {
        this.list.push(json);
        fs.writeFileSync('data.json', JSON.stringify(this.list));
    }

    getHTMLList() {
        let res = '<ul>';
        for (let [index, value] of this.list.entries()) {
            res = res + `<li><a href="/select-file?id=${index}">${value.date} > ${value.name}</a><a href="/delete-file?id=${index}"> DELETE</a></li>`;
        }
        res = res + '</ul>';
        return res;
    }

    delete(index) {
        this.list.splice(index, 1);
        fs.writeFileSync('data.json', JSON.stringify(this.list));
    }
}