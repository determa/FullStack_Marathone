let text = '';
let num = '0';

let print_text = document.getElementById("calc-typed");
let print_old_text = document.getElementById("calc-operation");

function add() {
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            tmp = buttons[i].textContent;
            print_text.style.fontSize = "21px";
            print_text.style.color = "gray";
            if (tmp == 'C') {
                text = '';
                num = '0';
                print_text.textContent = '0';
                print_old_text.textContent = '0';
            } else if (tmp == '!') {
                num = String(num);
                print_old_text.textContent = print_old_text.textContent.slice(0, num.length * -1);
                num = factorial(num);
                print_old_text.textContent = print_old_text.textContent + num;
                print_text.textContent = eval(text + num);
            } else if (tmp == 'x^2') {
                num = String(num);
                print_old_text.textContent = print_old_text.textContent.slice(0, num.length * -1);
                num = Math.pow(num, 2);
                print_old_text.textContent = print_old_text.textContent + num;
                print_text.textContent = eval(text + num);
            } else if (tmp == '√') {
                num = String(num);
                print_old_text.textContent = print_old_text.textContent.slice(0, num.length * -1);
                num = Math.sqrt(num);
                print_old_text.textContent = print_old_text.textContent + num;
                print_text.textContent = eval(text + num);
            } else if (tmp == 'CE') {

                num = num.slice(0, -1);
                print_old_text.textContent = print_old_text.textContent.slice(0, -1);
                try {
                    print_text.textContent = eval(print_old_text.textContent);
                } catch {
                    print_text.textContent = 'NaN';
                }
                if (print_old_text.textContent == '') {
                    print_old_text.textContent = '0';
                    print_text.textContent = '0';
                }
            } else if (tmp == '+/-') {
                if (num) {
                    console.log(print_old_text.textContent)
                    if (num.charAt(0) == '-') {
                        num = num.slice(1);
                    } else {
                        num = '-' + plus_minus(num);
                    }
                    print_old_text.textContent = text + num;
                    print_text.textContent = eval(text + num);
                }
            } else if (tmp == '%') {
                if (num) {
                    print_old_text.textContent = print_old_text.textContent.slice(0, num.length * -1);
                    num = eval(num + "*0.01");
                    print_old_text.textContent = print_old_text.textContent + num;
                    print_text.textContent = eval(text + num);
                }
            } else if (tmp == '+' || tmp == '-' || tmp == '*' || tmp == '/') {
                let symb = print_old_text.textContent.slice(-1);
                if (symb == '+' || symb == '-' || symb == '*' || symb == '/') {
                    text = text.slice(0, -1) + tmp;
                } else {
                    text += num + tmp;
                }
                num = '0';
                print_old_text.textContent = text;
            } else if (tmp == '=') {
                if (num) {
                    print_old_text.textContent = text + num;
                    num = '0';
                    try {
                        text = eval(print_old_text.textContent);
                    } catch {
                        print_text.textContent = 'NaN';
                        text = '';
                    }
                    print_text.style.fontSize = "30px";
                    print_text.style.color = "#fff";
                }
            } else if (tmp == '.') {
                let dot = print_old_text.textContent.slice(-1);
                if (dot != '.' && dot != '') {
                    num += tmp;
                    print_old_text.textContent = text + num;
                    try {
                        print_text.textContent = eval(text + num);
                    } catch {
                        print_text.textContent = 'NaN';
                        text = '';
                    }
                }
            } else {
                if (num == '0')
                    num = '';
                num += tmp;
                print_old_text.textContent = text + num;
                print_text.textContent = eval(text + num);
            }
        });
    }
}

function plus_minus(str) {
    str = String(str);
    if (str[str.length - 1] != ')' && str != '') {
        last_count = '';
        let i = str.length - 1;
        for (; Number.isInteger(parseInt(str[i])) && str[i] != ''; i--) {}
        last_count = str.substring(i + 1);
        str = str.substring(0, i + 1) + "(-" + last_count + ")";
    } else {
        if (str != '') {
            let i = str.length - 1;
            for (; str[i] != '('; i--) {}
            str = str.substring(0, i) + last_count;
        }
    }
    return str;
}

function cringe() {
    let elems = document.getElementsByTagName("*");
    setInterval(function () {
        for (let elem of elems) {
            elem.style.backgroundColor = `rgb(${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)})`;
            elem.style.padding = parseInt(Math.random() * 32) + "px";
        }
    }, 400);
}

function factorial(n) {
    n = Number(n);
    let temp = 1;
    for (let i = 1; i <= n; i++) {
        temp *= i;
    }
    console.log('fact: ' + temp);
    return temp;
}

function result() {

    console.log(text)
}
add();