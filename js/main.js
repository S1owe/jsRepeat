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


// Выражение x ?? y равно x, если x не равно ни undefined, ни null, а в противном случае равно y.

let x = 10, y = 5;
console.log(x ?? y);

// Выражение x?.propertyName возвращает значение свойства x с именем propertyName, если x не равно ни undefined, ни null, а в противном случае undefined

console.log(people?.name);

// switch case
let switchExample = "small";
let resultSwitch = '';
switch (switchExample) {
    case 'big':
        resultSwitch = 1;
        break;

    case 'normal':
        resultSwitch = 2;
        break;

    case 'small':
        resultSwitch = 3;
        break;

    default:

        resultSwitch = 4;
}

console.log(resultSwitch);

// циклы
console.log('---Circle---');

for (let elem of numberMass) {
    console.log(elem);
}

// Цикл for of нельзя использовать для обхода значений свойств произвольного
// объекта, да это вряд ли и нужно – значения свойств обычно не имеют смысла
// без ключей. Вместо этого можно обойти ключи в цикле for in:

console.log('for in');

let infoObject = {
    sisters: false,
    brothers: false,
    gender: 'male',
    age: 16,
};

for (let i in infoObject) {
    console.log("key = " + i + ", value = " + infoObject[i]);
}

for (let i in numberMass) {
    console.log(i + " : " + numberMass[i]);
}

















