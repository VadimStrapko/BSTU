// //var 1
// function makeCounter(){
//     let currentCount = 1;//для каждого объекта разная
//     return function(){
//         return currentCount++;
//     };
// }

// let counter = makeCounter();

// console.log(counter() );//1
// console.log(counter() );//2
// console.log(counter() );//3
// let counter2 = makeCounter();
// console.log(counter2() );//1
// //var 2
// let currentCount = 1;//глобальная
// function makeCounter2(){
//     return function(){
//         return currentCount++;
//     };
// }

// let counter3 = makeCounter2();
// let counter4 = makeCounter2();

// console.log(counter3() );
// console.log(counter3() );
// console.log(counter4() );
// console.log(counter4() );

// //2
// function curryVolume(length) {
//     return function (width) {
//         return function (height) {
//             return length * width * height;
//         };
//     };
// }

// // Ввод данных от пользователя
// const length = parseFloat(prompt("Введите длину ребра:"));

// // Проверка на корректность ввода
// if (isNaN(length)) {
//     console.log("Некорректный ввод. Пожалуйста, введите числовое значение для длины ребра.");
// } else {
//     while (true) {
//         // Запрос ширины и высоты от пользователя
//         const width = parseFloat(prompt("Введите ширину:"));
//         const height = parseFloat(prompt("Введите высоту:"));

//         // Проверка на корректность ввода
//         if (isNaN(width) || isNaN(height)) {
//             console.log("Некорректный ввод. Пожалуйста, введите числовые значения для ширины и высоты.");
//         } else {
//             // Пример использования:
//             const calculateVolume = curryVolume(length);
            
//             // Расчет объема прямоугольного параллелепипеда с одинаковой длиной ребра
//             const volume = calculateVolume(width)(height);
            
//             console.log("Объем прямоугольного параллелепипеда:", volume);
            
//             // Проверка, хочет ли пользователь продолжить
//             const continueCalculation = prompt("Желаете рассчитать еще один объем? (yes/no)").toLowerCase();
//             if (continueCalculation !== 'yes') {
//                 break;
//             }
//         }
//     }
// }


// console.log("///////////////3");
// function* moveGenerator() {
//     let x = 0;
//     let y = 0;
//     for (let i = 0; i < 10; i++) {
//         let direction = yield {x, y}; //передает управление обратно в код
//         switch (direction) {
//             case 'left':
//                 x--;
//                 break;
//             case 'right':
//                 x++;
//                 break;
//             case 'up':
//                 y++;
//                 break;
//             case 'down':
//                 y--;
//                 break;
//             default:
//                 console.log('Неверная команда. Используйте "left", "right", "up" или "down".');
//                 i--; // Повторить текущий шаг, так как команда была неверной
//                 break;
//         }
//     }

//     console.log('Движение завершено.');
// }

// const iterator = moveGenerator();
// step = iterator.next();
// const userInput = prompt('Введите команду (left, right, up, down):');//после этого обратно в for
// step = iterator.next(userInput);
// while (!step.done) {
//     console.log(`Текущие координаты: (${step.value.x}, ${step.value.y})`);
//     const userInput = prompt('Введите команду (left, right, up, down):');
//     step = iterator.next(userInput);
// }


// console.log("/////////////////4");
// Создание переменной и функции без явного указания области видимости
globalVar = "глобальная переменная";
const qwer="локал";

function globalFunction() {
    console.log("глобальная функция");
    
}
// function as()
// {
//     localparm="7777";
// }
console.log(window.qwer);      

console.log(window.localparm);      
console.log(window);//выводит в консоль объект window            
console.log(window.globalVar);      
console.log(window.globalFunction); 

window.globalVar = "Новое значение глобальной переменной";//переопределение глобальной
window.globalFunction = function() {
    console.log("Новый код глобальной функции");
};

console.log(window.globalVar);       
window.globalFunction();            
// //Выполните преобразование функции для неоднократного расчёта объема прямоугольных параллелепипедов, у которых одно ребро одинаковой длины.
// //как создать переменную, которая не будет видна для windows