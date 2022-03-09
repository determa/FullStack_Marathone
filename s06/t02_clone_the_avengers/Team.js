exports.Team = class {
    constructor(id, avengers) {
        this.id = id;
        this.avengers = avengers;
        this.result;
    }
    clone() {
        return Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)));
    }
    battle(damage) {
        this.avengers.forEach(item => item.damage(damage));
        this.avengers = this.avengers.filter(item => {
            if (item.hp > 0)
                return item;
        });
    }
    calculateLosses(clonedTeam) {
        if (this.avengers.length == clonedTeam.avengers.length) {
            console.log(`We haven't lost anyone in this battle!`);
        } else {
            this.result = clonedTeam.avengers.length - this.avengers.length;
            console.log(`In this battle we lost ${this.result} Avengers.`);
        }
    }
}