let num = 20;

function showFirstMessage(text){
    alert(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

// Функция-декоратор. Работает даже при вызове раньше места ее объявления
// console.log(calc(3,4));
// console.log(calc(5,6));

// function calc (a,b) {
//     return(a + b);
// }


//Функциональное выражение. Создается только тогда, когда код до нее доходит
// let calc =  function (a,b) {
//         return(a + b);
//     }

// console.log(calc(3,4));
// console.log(calc(5,6));

//Строчная функция
let calc = (a,b) => a+b;
console.log(calc(3,4));
console.log(calc(5,6));

function retVar(){
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length); //свойство - выводитсясвойство переменной
console.log(str.toUpperCase); //методы - преобразуют данные
console.log(str.toLowerCase); //методы

let twelve = "12.2";
console.log(Math.round(twelve));
console.log(typeof(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));