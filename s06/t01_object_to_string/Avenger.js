function avenger(option) {
    let Avenger = () => ([
        option.alias.toUpperCase(),
        option.powers.join('\n')
    ]).join('\n');
    Avenger.toString = () => [
        `name: ${option.name}`,
        `gender: ${option.gender}`,
        `age: ${option.age}`
    ].join('\n');
    return Avenger;
}

module.exports.Avenger = avenger;