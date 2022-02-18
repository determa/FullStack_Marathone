function concat(...args) {
    func.count = 0;

    function func() {
        let res = prompt("Enter resing: ", "");
        if (res === null)
            return args[0];
        func.count++;

        return args[0].concat(" ", res);
    }

    if (arguments.length == 1)
        return func;
    if (arguments.length == 2) {
        return args[0].concat(" ", args[1]);
    }
}