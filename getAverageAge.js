let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

let getAverageAge = function (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i].age;  
    }
    return total / array.length;  
};
/*
let getAverageAge = function (array) {
    let total = srrsy.reduce((sum, item) => sum + item.age, 0);
    return total / array.length;
};
*/
alert(getAverageAge(arr));  