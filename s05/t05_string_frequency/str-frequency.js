module.exports = class StrFrequency {
    object = {};
    constructor(str) {
        this.str = str;
        this.strCase = str.toUpperCase();
    }

    letterFrequencies() {
        this.object = {};
        for (let i = 0; i < this.strCase.length; i++) {
            if (new RegExp(/[A-Z]/).test(this.strCase[i])) {
                if (this.object[this.strCase[i]])
                    this.object[this.strCase[i]]++;
                else
                    this.object[this.strCase[i]] = 1;
            }
        }
        return this.object;
    }

    wordFrequencies() {
        let result = '';
        this.object = {};
        for (let i = 0; i < this.strCase.length; i++) {
            if (new RegExp(/[A-Z\s]/).test(this.strCase[i])) {
                result += this.strCase[i];
            }
        }
        result.split(' ').map(item => {
            if (item.length > 0) {
                this.object[item] = this.object[item] ? this.object[item] + 1 : 1
            }
        });
        return this.object
    }

    reverseString() {
        return [...this.str].reverse().join('');
    }
};