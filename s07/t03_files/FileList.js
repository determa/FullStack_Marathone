let fs = require('fs');

module.exports = class FileList {
    
    getList() {
        return fs.readdirSync('./tmp');
    }

    hasFiles() {
        if (fs.readdirSync('./tmp').length > 1) {
            return true;
        }
        else {
            return false;
        }
    }

    getHTMLList() {
        let list = '<ul>';
        for (let name of fs.readdirSync('./tmp')) {
            list = list + `<li><a href="/select-file?file=${name}">${name}</a></li>`;
        }
        list = list + '</ul>';
        return list;
    }
}