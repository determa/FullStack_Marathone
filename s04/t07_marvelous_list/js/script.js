const data = [{
        title: 'John Wick',
        image: 'assets/images/John_Wick.png',
        date: 'May 9, 2019',
        description: `John Wick makes his way through Manhattan before he is labeled "excommunicado" for the unauthorized killing of High Table crime lord Santino D'Antonio on the grounds of the New York Continental Hotel.[N 1] At the New York Public Library, he retrieves a marker medallion and a crucifix. He is injured in a fight with a hitman named Ernest and seeks medical treatment from an underworld doctor, but his $14 million bounty activates before the doctor can finish. John finishes suturing himself and shoots the doctor in the stomach and shoulder to protect him from repercussions. He is quickly pursued by various gangs of assassins, whom he kills in an antiques store, in a stable, and in a chase while on horseback.`,
        actors: ['Keany Reeves', 'Halle Berry', 'Ian McShane', 'Lance Reddick'],

    },
    {
        title: 'Avengers:Endgame',
        image: 'assets/images/Avengers_Endgame.png',
        date: 'April 22, 2019',
        description: `In 2018, twenty-three days after Thanos killed half of all life in the universe,sCarol Danvers rescues Tony Stark and Nebula from deep space and they reunite with the remaining Avengers—Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes—and Rocket on Earth. Locating Thanos on an uninhabited planet, they plan to use the Infinity Stones to reverse his actions, but discover Thanos has already destroyed them to prevent further use. Enraged, Thor decapitates Thanos.`,
        actors: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Jeremy Renner'],

    },
    {
        title: 'Inception',
        image: 'assets/images/Inception.png',
        date: '8 July 2010',
        description: `Dom Cobb is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.`,
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page', 'Tom Hardy'],

    }
];

function get_actors(actors) {
    let res = '';

    actors.forEach((i, k, actors) => {
        res += `<p>${i}</p>`;
    });

    return res;
}

function get_item(item) {
    let info = `
        <div>
            <h2>${item.title}</h2>
            <p>${item.date}</p>
            <div class="flx">
                ${get_actors(item.actors)}
            </div>
            <p>${item.description}</p>
        </div>
        <div>
            <img src="${item.image}" alt="img">
        </div>`;
    return info;
}

function list(n) {
    var btns = document.getElementsByTagName("button");
    for (let i = 0; i < btns.length; i++) {
        if (i === n) {
            btns[i].setAttribute('class', 'choosen');
        } else {
            btns[i].setAttribute('class', 'btn');
        }
    }

    var block = document.getElementById('film-block');
    switch (n) {
        case 0:
            block.innerHTML = get_item(data[0]);
            break;
        case 1:
            block.innerHTML = get_item(data[1]);
            break;
        case 2:
            block.innerHTML = get_item(data[2]);
    }
}

list(0);