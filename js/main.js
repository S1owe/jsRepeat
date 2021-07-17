'use strict'; // строгий режим

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


let angle = (newAngle, oldAngle) => {
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

// Обработка ошибок

let input = 'Error'; // читать откуда-то входные данные
try {
    let data = JSON.parse(input);
    // Если выполнение дошло до этого места, значит, входные данные корректны
    // Обработать данные

} catch {
    console.log('Error detected!');
}

// map

console.log([0, 1, 2, 3].map(function (x) {
    return (x * 5)
}));

// крепкие объекты или паттерн замыкания

const bank = () => {
   let balance = 0;

   return {
       deposit: (amount) => {
           balance += amount
       },
       withdraw: (amount) => {
           if (balance >= amount)
               balance -= amount
       },
       getBalance: () => balance
   }
};

const ivanAccount = bank();
const andreyAccount = bank();
ivanAccount.deposit(100);
andreyAccount.deposit(300);
andreyAccount.withdraw(50);

console.log('ivanAccount = ' + ivanAccount.getBalance());
console.log('andreyAccount = ' + andreyAccount.getBalance());

const constructCounter = (x, y = 1) => {
    let countElem = x;
    return {
        count: () => {
            countElem += y;
            return countElem
        }
    }
};

const anyP = constructCounter(0, 2);
console.log('anyP = ' + anyP.count());
console.log('anyP = ' + anyP.count());

// значение функций по умолчанию

const anyFunc1 = (x = 1, y = 2) => {
    return x + y
};

console.log('anyFunc1 = ' + anyFunc1(5));

// прочие параметры и оператор расширения

const average = (first = 0, ...any) => {

    let sum = first;
    let count = 1;

    any.forEach((item, i) => {

        if (isNaN(item)) {    // если не число
            throw new Error('item не число')
        }

        sum += item;
        count++;
    });

    return sum/count

};

console.log('average = ' + average(1, 2, 3, 4, 5, 6));

let mass3 = [1, 2, 3, 4, 5, 6, 7, 8];
let result = Math.max(...mass3); // разбивает массив по элементам
console.log('result = ' + result);

const mkString = (array, {
    separator = ',',
    leftDelimiter = ']',
    rightDelimiter = '['
}) => {
    let result = '';
    array.forEach((item, i) => {
        result += leftDelimiter + item + rightDelimiter + separator + ' '
    });

    return result
};

console.log('mkString = ' + mkString([1, 2, 3, 4], {
    leftDelimiter: '(',
    rightDelimiter: ')'
}));

// работа с исключениями

input = 'Error'; // читать откуда-то входные данные
try {
    let data = JSON.parse(input);
    // Если выполнение дошло до этого места, значит, входные данные корректны
    // Обработать данные

} catch (e) {
    console.log('Error!');
    console.log(e);
}

//В предложении try может быть необязательная ветвь finally. Код в ветви finally выполняется вне зависимости от того, произошло исключение или нет.

input = 0;

try {
    input++;

} catch (e) {
    console.log(e);
} finally {
    console.log('finally');
}

// прототипы

const employeePrototype = {
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100
    }
};

function createEmployee(name, salary) {
    const result = {name, salary};
    Object.setPrototypeOf(result, employeePrototype);
    return result
}

const employeeMisha = createEmployee('Misha', 10000);
employeeMisha.raiseSalary(10);
console.log(employeeMisha);

// конструирующие объекты

function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

const ivan = new Employee('Ivan', 5000);
console.log('ivan salary = ' + ivan.salary);

// класс - в es6 спецификации класс это просто синтаксический сахар, пример ниже эквивалентен функции выше

class EmployeeNew {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    raiseSalary(percent) {
        this.salary *= 1 + percent/100
    }
}

const ivan2 = new EmployeeNew('Ivan2', 30000);
ivan2.raiseSalary(10);
console.log('Ivan2 salary = ' + ivan2.salary);

// акцессоры чтения (getter) и записи (setter)

class Person {
    constructor(first, second, age) {
        this.first = first;
        this.second = second;
        this.age = age;
    }

    get fullName() {
        return (this.first + ', ' + this.second)
    }

    get ageCount() {
        return this.age
    }

    set incrementAge(value) {
        this.age += value
    }
}

const personIvan = new Person('Ivan', 'Vasilev', 22);
personIvan.incrementAge = 2;  // вызываем setter (акцессор записи)
console.log('personIvan = ' + personIvan.fullName);
console.log('personIvan age = ' + personIvan.ageCount);

// подклассы

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(this.name + ' бежит со скоростью ' + this.speed + ' км/ч');
    }
}


class Rabbit extends Animal {
    constructor(name) {
        super(name)
        // Ссылку this разрешается использовать только после вызова super. Однако
        // если вы не предоставили конструктор подкласса, то он будет сгенерирован
        // автоматически. И этот автоматический конструктор передает все аргументы
        // конструктору суперкласса.
    }
    hide() {
        console.log(this.name + ' прячется');
    }
}

let rabbit = new Rabbit('Белый кролик');
rabbit.run(5);
rabbit.hide();

// строки и регулярные выражения
let string = "Hello world! I'm love you!";
console.log(string.substring(1, 4)); // ell
console.log(string.slice(1, 4)); // ell
console.log(string.split(' ')); // разбить строку по пробелу
console.log(string.split(' ', 3)); // разбить строку по пробелу и ограничить 3-мя элементами
console.log(string.trim()); // удалить пробелы в начале и в конце строки

// тегированные шаблонные литералы
const stringF = (fragments, ...value) => {
    let result = fragments[0];
    for (let i = 0; i < value.length; i++) {
        result += `<strong>${value[i]}</strong>${fragments[i + 1]}`
    }
    return result
};

console.log(stringF(['Next year, ', ' will be ', '.'], 'Harry', 43));

// регулярные выражения

// Символ . сопоставляется с любым символом, но только одним. Например,
// .r.f сопоставляется с href и с prof.

// Чтобы проверить, соответствует ли регулярному выражению вся строка
// целиком, следует использовать якоря начала и конца:
console.log(/^[0-9]+$/.test('agent 007')); // false

let digits = /[0-9]+/g;

console.log(digits.exec('agents 007 and 008')); // ['007', index: 7, . . .]
console.log(digits.exec('agents 007 and 008')); // ['008', index: 15, . . .]
console.log(digits.exec('agents 007 and 008')); // null

// сразу все сопост. подстроки

console.log('agents 007 and 008'.match(/[0-9]+/g));

// массивы и коллекции

let arr = [0, 1, 4, 16, 25];
let arrResult = arr.pop(); // 0, 1, 4, 16 - аналогично arrResult.length--
arrResult = arr.push(2); // 0, 1, 4, 16, 25, 5
arrResult = arr.shift(); // 1, 4, 16, 25 - удалить первый элемент
arrResult = arr.unshift(-1); // -1, 0, 1, 4, 16, 25 - добавить первый элемент
// Методы push и unshift могут добавить любое число элементов за один раз
arr.splice(1, 0, 99, 100); // удалить 0 элементов, вставить с 1-й позиции 99 и 100
console.log(arr);  // Метод splice возвращает массив удаленных элементов.
arr = [0, 1, 4, 16, 25];
console.log(arr.reverse());  // 25, 16, 4, 1, 0
// отрицательное число, если x должен предшествовать y;
// положительное число, если x должен следовать за y;
// 0, если элементы неразличимы

arr.sort((x, y) => x - y);  // сортировка массива
console.log(arr);

//Метод flat разглаживает многомерные массивы
console.log([[1, 2], [3, 4]].flat()); // [1, 2, 3, 4] - вызов .flat(2) указывает сколько уровней необходимо разглаживать

// поиск элементов в массиве

console.log(arr.includes(16, 1)); // включено ли число 16 в массив arr, при поиске с 0-го элемента

















