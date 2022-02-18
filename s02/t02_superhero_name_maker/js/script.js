function what_the_animal() {

    let description = '';
    let animal, gender, age;
    let regex;

    animal = prompt('What animal is the superhero most similar to?', '');
    regex = RegExp('^[a-zA-Z]+$');
    if (animal.length > 20 || !regex.test(animal)) {
        alert('Error\nInput requirements: length <= 20, only one word that contains only letters.');
        return;
    }

    gender = prompt('Is the superhero male or female? Leave blank if unknown or other.', '');
    regex = RegExp('^male$|^female$|^$', 'i');
    if (!regex.test(gender)) {
        alert('ERROR\nInput requirements: accepts onlymale,female, or blank (not case sensitive).');
        return;
    }

    age = prompt('How old is the superhero?', '');
    regex = RegExp(/^[1-9]|[1-9]{1,5}$/);
    if (age.length > 5 || !regex.test(age)) {
        alert('ERROR\nInput requirements: length <= 5, only digits, cannot start with a zero.');
        return;
    }

    if (RegExp('^male$', 'i').test(gender) && age < 18) {
        description = "boy";
    }
    else if (RegExp('^male$', 'i').test(gender) && age >= 18) {
        description = "man";
    }
    else if (RegExp('^female$', 'i').test(gender) && age < 18) {
        description = "girl";
    }
    else if (RegExp('^female$', 'i').test(gender) && age >= 18) {
        description = "woman";
    }
    else if (RegExp('^$').test(gender) && age < 18) {
        description = "kid";
    }
    else if (RegExp('^$').test(gender) && age >= 18) {
        description = "hero";
    }

    alert(`The superhero name is ${animal}-${description}!`);
}

what_the_animal();