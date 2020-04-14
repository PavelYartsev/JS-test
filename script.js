'use strict'; //использование стандарта ES6
//Виды объявления переменных
var leftBorderWidth = 1;
{
    let second = 2;
}
const pi =3.14;
console.log(pi);
// Типы данных
var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};
// Вывод на экран числового типа Infinity
console.log(4/0);
//Вывод на экран числовго типа NaN
console.log('string'*9);
//Вывод на экран типа данных undefined
let some;
console.log(some);
//Тип данных obj - объект
let person = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(person.name);
console.log(person["name"]);
//Массив
let arr = ['plum.pmg', 'orange.jpg', 'apple.bmp'];
console.log(arr[2]);
/*Команда alert 
alert("Hello World!");*/

/*Команда confirm
let answer = confirm("Are you here?");*/

//Команда prompt
// let answer = prompt("Есть ли вам 18 лет?", "Да");
// console.log(typeof(answer));
// let answer = +prompt("Есть ли вам 18 лет?", "Да"); //+ перед prompt переводит рез-тат в number
// console.log(typeof(answer));

//Ошибка в JS, результатом операции будет object
console.log(typeof(null));

// Конкатенация. Результат всегда string
// console.log("arr" + "- object");
// console.log(4 + "arr");

// Операторы инкремента и декремента
let incr = 10,
    decr = 10;
// incr++;
// decr--;
// Префиксная форма записи - выводит уже измененное значение переменной
console.log(++incr);
console.log(--decr);
// Постфиксная форма записи - выводит старое значение переменное, потом происходит изменение
console.log(incr++);
console.log(decr--);
// Остаток от деления 2х чисел
console.log(5%2);
/*Знак равенства
= - присовение
== - проверка на равенство значений,например "2"==2
=== - строгая проверка по типам данных */
let isChecked = true,
    isClose = true;
console.log(isChecked && isClose);  //логическое И
console.log(isChecked || isClose);  //логическое ИЛИ
console.log(isChecked || !isClose); //логическое НЕ
