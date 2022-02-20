let placeholder = document.getElementById('placeholder');
let notification = document.getElementById('notification');

let id = '';
let sorting = {name: 'Desc', strenght: 'Asc', age: 'Asc'};

let heroes = [
	{name: 'Black Panther', strenght: 66, age: 53},
	{name: 'Captain America', strenght: 79, age: 137},
	{name: 'Captain Marvel', strenght: 97, age: 26},
	{name: 'Hulk', strenght: 80, age: 49},
	{name: 'Iron Man', strenght: 88, age: 48},
	{name: 'Spider-Man', strenght: 78, age: 16},
	{name: 'Thanos', strenght: 99, age: 1000},
	{name: 'Thor', strenght: 95, age: 1000},
	{name: 'Yon-Rogg', strenght: 73, age: 52}
];

placeholder.innerHTML = `Sorting by ... , order: ...`;
notification.innerHTML = createTable(heroes);

function createTable(heroes) {
    let table = `
    <div class="box">
        <table>
            <tr>
                <th id="name" onclick="nameSort()">Name</th>
                <th id="strenght" onclick="strengthSort()">Strength</th>
                <th id="age" onclick="ageSort()">Age</th>
            </tr>`;
    
    heroes.forEach(function(item){
        table += `
            <tr>
                <td> ${item.name} </td>
                <td>  ${item.strenght} </td>
                <td> ${item.age} </td>
            </tr>`
    });

    table += `
        </table>
    </div>`
    return table;
}

function nameSort() {
    id = 'name';
    switchSorting();
}
function strengthSort() {
    id = 'strenght';
    switchSorting();
}
function ageSort() {
    id = 'age';
    switchSorting();
}

function compareHeroes(hero1, hero2) {
    if (hero1[id] > hero2[id]) return 1;
    if (hero1[id] === hero2[id]) return 0;
    if (hero1[id] < hero2[id]) return -1;
}

function switchSorting() {
    heroes.sort(compareHeroes);

    if (sorting[id] === 'Asc') {
        changeNotification();
        sorting = {name: 'Asc', strenght: 'Asc', age: 'Asc'};
        sorting[id] = 'Desc';
    }
    else {
        changeNotification();
        sorting = {name: 'Asc', strenght: 'Asc', age: 'Asc'};
        heroes.reverse();
        sorting[id] = 'Asc';
    }

    notification.innerHTML = createTable(heroes)
}

function changeNotification() {
    placeholder.innerHTML = `Sorting by ${id[0].toUpperCase() + id.slice(1)}, order: ${sorting[id]}`
}