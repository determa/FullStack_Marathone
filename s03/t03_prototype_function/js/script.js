String.prototype.removeDuplicates = function removeDuplicates() {
    let res = this.replace(/ +(?= )/g, '').trim();
    let arr = res.split(' ');

    res = arr.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
    }).join(' ');

    return res;
};