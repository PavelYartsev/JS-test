
if (num < 49){
    console.log('Неверно!');
} else if (num > 100) {
    console.log('Много!');
} else {
    console.log('Верно!');
};

(num == 50) ? console.log('Верно!') : console.log('Неверно!');

switch(num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Много!');            
        break;
    case num > 100:
        console.log('Все еще много!');            
        break;
    case 50:  //Запомнить, что case num == 50 неверный формат условия!
        console.log('Верно!');            
        break;    
    default:
        console.log("Что-то пошло не так!");
        break;

}

let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++){
    if (i == 6) {
        break; //прерывает работы цикла при достижении данного значения
    }
    console.log(i); 
}

for (let i = 1; i < 8; i++){
    if (i == 6) {
        continue; //пропускает конкретное указанное значение и продолжает работы цикла дальше
    }
    console.log(i); 
}