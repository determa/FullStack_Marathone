exports.checkDivision = (start = 1, end = 60) => {
    let coma;
    let text
    for (let i = start; i <= end; i++) {
        coma = false;
        text = `The number ${i}`;
        if (i % 2 === 0) {
            text += (" is divisible by 2");
            coma = true;
        }
        if (i % 3 === 0) {
            if (coma === true)
                text += ',';
            text += (" is divisible by 3");
            coma = true;
        }
        if (i % 10 === 0) {
            if (coma === true)
                text += ',';
            text += (" is divisible by 10");
            coma = true;
        }
        if (coma !== true)
            text += ' -';
        console.log(text);
    }
}