exports.firstUpper = (str) => {
    if ((typeof str) != 'string')
        return '';
    str = str.trim().toLowerCase();
    str = str.slice(0, 1).toUpperCase() + str.slice(1);
    return str;
}