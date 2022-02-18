let first_name = String(prompt("What is your first name?"));
let last_name = String(prompt("What is your last name?"));

if (first_name.match(/^[a-z]+$/i) && last_name.match(/^[a-z]+$/i)) {
    first_name = first_name.charAt(0).toUpperCase() + first_name.slice(1).toLowerCase();
    last_name = last_name.charAt(0).toUpperCase() + last_name.slice(1).toLowerCase();

    console.log(`Hello, ${first_name} ${last_name}`);
    alert(`Hello, ${first_name} ${last_name}`);
} else {
    console.log("Wrong input!");
    alert("Wrong input!");
}