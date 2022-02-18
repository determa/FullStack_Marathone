let number = 5;
let bigint = 125n;
let string = "string";
let bool = true;
let nothing = null;
let undef;
let obj = {};
let symbol = Symbol('symbol');
let func = () => {};

alert(`Number is ${typeof number}\nBigInt is ${typeof bigint}\nString is ${typeof string}
Boolean is ${typeof bool}\nNull is ${typeof nothing}\nUndefined is ${typeof undefined}
Object is ${typeof obj}\nSymbol is ${typeof symbol}\nFunction is ${typeof func}`);