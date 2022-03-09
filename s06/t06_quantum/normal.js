let start = new Date("01-01-1939");

exports.calculateTime = () => {
    let now = new Date();
    let result = {};
    result.years = () => {
        return now.getFullYear() - start.getFullYear();
    };
    result.months = () => {
        return now.getMonth() - start.getMonth();
    };
    result.days = () => {
        return now.getDate() - start.getDate();
    };
    return result;
}