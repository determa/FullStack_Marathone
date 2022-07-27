module.exports = class Note {
    date;
    name;
    importance;
    text;

    constructor(name, prior, text) {
        let today = new Date();
        this.date = `${today.getFullYear()}-${this.pad(today.getMonth() + 1)}-${this.pad(today.getDate())} ${this.pad(today.getHours())}:${this.pad(today.getMinutes())}:${this.pad(today.getSeconds())}`;
        this.name = name;
        this.importance = prior;
        this.text = text;
    }

    get_json() {
        let json = { date: this.date, name: this.name, importance: this.importance, text: this.text }
        return json;
    }

    pad(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;

    }
}