function menu() {
    let menu = new Map();
    // add elements
    menu.set("Glaz Edika", 100);
    menu.set("Mozg Denisa", 10000);
    menu.set("Frozen Fish", 5);
    menu.set("Blue Chicken", 10);
    menu.set("Hot Dog", 3);
    menu.set("Good kitty", 999999);
    menu.set("ooops", 77);

    //remove elements
    menu.delete("ooops");

    console.log(`Size: ${menu.size}`); // get size
    menu.get("Hot Dog"); // find elements

    // print
    for (let [key, value] of menu) { //iterate over it
        console.log(`${key} ${value}$`);
    }

    //clear list
    for (let [key, value] of menu) { //iterate over it
        menu.delete(key);
    }
}

function coinCollection() {
    let coins = new Set();
    // add elements
    coins.add("1 cent");
    coins.add("5 cent");
    coins.add("1 dollar");
    coins.add("10 dollar");
    coins.add("20 dollar");
    coins.add("100 dollar");
    coins.add("7 cent");

    // remove elements
    coins.delete("7 cent");

    console.log(`Count: ${coins.size}`); // get size

    for (let item of coins) //iterate over it
        console.log(item);
}

function guestList() {
    let guests = new WeakMap();
    const guest1 = {},
        guest2 = {},
        guest3 = {},
        guest4 = {},
        guest5 = {},
        guest6 = {};

    // add elements
    guests.set(guest1, "Denis");
    guests.set(guest2, "Edik");
    guests.set(guest3, "Kostya");
    guests.set(guest4, "Jeka");
    guests.set(guest5, "Danil");
    guests.set(guest6, "Bogdan");

    // remove elements
    guests.delete(guest4); // remove guest

    console.log(`Guest Danil invited: ${guests.has(guest5)}`);
    console.log(`Guest Jeka invited: ${guests.has(guest4)}`);

}

function bankVault() {
    let bank = new WeakSet();
    let vault1 = {
        content: "Gold bar"
    };
    let vault2 = {
        content: "Silver bar"
    };
    let vault3 = {
        content: "Almaz"
    };

    // add elements
    bank.add(vault1);
    bank.add(vault2);
    bank.add(vault3);

    console.log(`${vault1.content} in the vault: ${bank.has(vault1)}`);

    // delete elements
    bank.delete(vault3);
    console.log(`${vault3.content} in the vault: ${bank.has(vault3)}`);

}

console.log("---------\nMenu\n---------");
menu();
console.log("---------\ncoinCollection\n---------");
coinCollection();
console.log("---------\nguestList\n---------");
guestList();
console.log("---------\nbankVault\n---------");
bankVault();