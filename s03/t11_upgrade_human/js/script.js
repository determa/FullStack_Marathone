'use strict'
// ne moe :(
class Human {
    constructor(firstName, lastName, gender, age, calories = 500) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
        this.live();
    }

    sleepFor() {
        if (this.calories <= 0) {
            this.dead();
        } else {
            this.updateHero("assets/images/sleep.png");
            this.say("I'm sleeping", "green", "#fff");
            setTimeout(() => {
                this.calories -= 200;
                this.updateCalories();
                this.updateHero();
                if (this.calories > 0) {
                    this.say("I'm awake now", "green", "#fff");
                } else {
                    this.dead();
                }
            }, 2000);
        }
    }

    feed() {
        if (this.calories <= 0) {
            this.dead();
        } else {
            this.say("Nom nom", "green", "#fff");
            this.updateHero("assets/images/eat.png");
            setTimeout(() => {
                this.calories += 200;
                this.updateCalories();
                this.updateHero();
                if (this.calories < 500) {
                    this.say("I'm still hungry", "orange");
                } else {
                    this.say("I am not hungry", "white");
                }
                if (this.calories < 500) {
                    this.say("I'm still hungry", "orange");
                }
                this.updateHero();
            }, 1000);
        }
    }

    live() {
        let live = setInterval(() => {
            this.calories -= 200;
            this.updateCalories();
            this.updateHero();
            if (this.calories <= 300 && this.calories > 0) {
                this.say("I'm hungry", "orange");
            }

            if (this.calories <= 0) {
                this.dead(live);
            }
        }, 15000);
    }

    fight() {
        if (this.calories <= 0) {
            this.dead();
        } else {
            this.updateHero("assets/images/fight.png");
            setTimeout(() => {
                this.calories -= 300;
                this.updateCalories();
                this.updateHero();
            }, 3000);
        }
    }

    updateHero(src = "assets/images/human.png") {
        if (this.calories <= 0) {
            this.say("I'm dead", "red", "#fff");
            document.getElementById("human").src = "assets/images/dead.png";
        } else {
            document.getElementById("human").src = src;
        }
    }

    dead(live = 0) {
        clearInterval(live);
        this.updateHero("assets/images/dead.png");
        this.say("I'm dead", "red", "#fff");
    }

    say(message, color = "#fff", text = "#000") {
        document.getElementById("message").innerText = message;
        document.getElementById("message").style.background = color;
        document.getElementById("message").style.color = text;
    }

    updateCalories() {
        document.getElementById("calories").innerText = this.calories;
    }
}

class Superhero extends Human {
    constructor(firstName, lastName, gender, age, calories) {
        super(firstName, lastName, gender, age, calories);
        this.updateHero("assets/images/superhero.png");
        this.transformation();
    }

    fly() {
        if (this.calories <= 0) {
            this.dead();
        } else {
            this.updateHero("assets/images/fly.png");
            setTimeout(() => {
                this.calories -= 100;
                this.updateCalories();
                this.updateHero();
            }, 1000);
        }
    }

    fightWithEvil() {
        if (this.calories <= 0) {
            this.dead();
        } else {
            this.updateHero("assets/images/fight-with-evil.png");
            setTimeout(() => {
                this.say("Khhhh-chh... Bang-g-g-g... Evil is defeated!", "red", "#fff");
                this.calories -= 100;
                this.updateCalories();
                this.updateHero();
            }, 3000);
        }
    }

    feed() {
        if (this.calories <= 0) {
            this.dead();
        } else {
            this.say("Nom nom", "green", "#fff");
            this.updateHero("assets/images/eat.png");
            setTimeout(() => {
                this.calories += 200;
                this.updateCalories();
                this.updateHero();
                if (this.calories < 500) {
                    this.say("I'm still hungry", "orange");
                } else {
                    this.say("I am not hungry", "white");
                }
                if (this.calories < 500) {
                    this.say("I'm still hungry", "orange");
                }
                this.updateHero();
            }, 1000);
        }
    }

    fight() {
        if (this.calories <= 0) {
            this.dead();
        } else {
            this.updateHero("assets/images/fight.png");
            setTimeout(() => {
                this.calories -= 300;
                this.updateCalories();
                this.updateHero();
            }, 2000);
        }
    }
    updateHero(src = "assets/images/superhero.png") {
        if (this.calories <= 0) {
            this.say("I'm dead", "red", "#fff");
            document.getElementById("human").src = "assets/images/dead.png";
        } else {
            document.getElementById("human").src = src;
        }
    }
}

document.getElementById("super").onclick = function () {
    if (human.calories >= 500) {
        document.getElementById("evil").style.display = "block";
        document.getElementById("fly").style.display = "block";
        document.getElementById("super").style.display = "none";
        Human.prototype.transformation = function () {
            if (this.calories <= 0) {
                this.dead();
            } else {
                this.say("I'm transforming", "green", "#fff");
                this.updateHero("assets/images/transformation.png");
                setTimeout(() => {
                    this.updateHero();
                }, 2000);
            }
        };
        human = new Superhero();
    } else if (human.calories > 0) {
        human.say("I'm hungry", "orange");
    } else {
        human.say("I'm dead", "red", "#fff");
    }

};

let human = new Human("Man", "PuP", "clerk", 222);

document.getElementById("firstName").innerText = human.firstName;
document.getElementById("lastName").innerText = human.lastName;
document.getElementById("gender").innerText = human.gender;
document.getElementById("age").innerText = human.age;
document.getElementById("calories").innerText = human.calories;