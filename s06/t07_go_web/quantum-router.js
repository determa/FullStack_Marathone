let start = new Date("01-01-1939");
let difference = 7;

exports.calculateTime = () => {
    let result = [];
    let now = new Date();
    now = new Date((now.getTime() - start.getTime()) / difference + start.getTime());
    result.push(now.getFullYear() - start.getFullYear());
    result.push(now.getMonth() - start.getMonth());
    result.push(now.getDate() - start.getDate());
    return result;
}
exports.now = () => {
    let now = new Date();
    now = new Date((now.getTime() - start.getTime()) / difference + start.getTime());
    return now;
}