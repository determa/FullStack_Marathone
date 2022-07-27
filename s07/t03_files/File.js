let fs = require('fs');

if (!fs.existsSync('./tmp')) {
    fs.mkdirSync('tmp');
}

module.exports = class File {
    file_name;

    constructor(name, content = '') {
        this.file_name = 'tmp/' + name;
        fs.appendFileSync(this.file_name, content, function (err) {
            if (err) throw err;
        });
    }

    write(content) {
        fs.writeFileSync(this.file_name, content, function (err) {
            if (err) throw err;
        });
    }

    read() {
        return fs.readFileSync(this.file_name, 'utf-8');
    }

    delete() {
        fs.unlinkSync(this.file_name);
    }
}