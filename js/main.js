console.log('This is repeat js learning');

// деструктуризация

let dayNumber = [1, 2];
let [first, second] = dayNumber;
console.log(first + " - " + second);

let people = {
    name: 'Ivanov',
    information: {
        sisters: false,
        brothers: false,
        gender: 'male',
        age: 16,
    }
};

let {information: {age: agePeople}} = people;
let info = {information: {age: agePeople}};
console.log("info");
console.log(info);

let numberMass = [1, 2, 3, 5, 7];
let [firstNumMass, secondNumMass, ...othersNumMass] = numberMass;
console.log("destruct");
console.log(firstNumMass);
console.log(secondNumMass);
console.log(othersNumMass);

let objectR = {
    size: 22,
    params: '2D'
};

let {size, params, colorR = 'red'} = objectR;
console.log('_______________');
console.log(size);
console.log(params);
console.log(colorR);


angle = (newAngle, oldAngle) => {
    let angle = newAngle + oldAngle;
    if (angle > 360) {
        angle = undefined;
    } else if (angle < 0) {
        angle = undefined;
    }

    return angle
};

console.log(angle(-10, 76));

// вложенные выражения (шаблонные литералы)

let age = 16;
let [big, small] = ['big', 'small'];

let literal = `Hello, I'm ${(age > 18)?(big):(small)}`;

console.log(literal);

// 3 способа массива с дыркой
console.log([1,2, ,4]);

let mass1 = [1,2,3,4];
delete mass1[2];
console.log(mass1);

let mass2 = [1,2,3,4];
mass2.splice(2, 1);
console.log(mass2);

const melancholyMagicSquare = [
    [16, 3, 2, 13],
    [5, 10, 11, 8],
    [9, 6, 7, 12],
    [4, 15, 14, 1]
];
console.log(melancholyMagicSquare.toString());





















