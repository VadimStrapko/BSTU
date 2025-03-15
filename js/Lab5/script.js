//1.[[Environment]] функций ссылается на лексическое окружение, 
//в котором была объявлена функция. В данном случае, 
//каждая созданная функция при помощи makeCounter ссылается на свое собственное лексическое окружение, 
//включающее currentCount.
//2.Каждый раз, когда вызывается функция, созданная через makeCounter,
//её лексическое окружение содержит переменную currentCount,
//специфичную для этой функции. В этой переменной хранится текущее значение счетчика.
//3.Переменная counter содержит функцию, возвращенную makeCounter(), 
//и эта функция имеет доступ к своему лексическому окружению, включая currentCount.
//4.Функция, возвращаемая makeCounter, будет вызвана каждый раз, когда вы вызываете counter(). 
//Она увеличивает currentCount на 1 и возвращает текущее значение.
//1
// function makeCounter() {
//     let currentCount = 1;

//     return function () {//(*)
//         return currentCount++;
//     };
// }

// let counter = makeCounter();

// alert(counter());//1
// alert(counter());//2
// alert(counter());//3

// let counter2 = makeCounter();
// alert(counter2());//1

//1.В этом случае, все функции создаются в глобальном лексическом окружении, поскольку переменная currentCount объявлена глобально. 
//Так что [[Environment]] каждой функции ссылается на глобальное лексическое окружение.

//2.Лексическое окружение каждой функции будет содержать переменную currentCount из глобального контекста.

//3.Переменная counter содержит функцию, возвращенную makeCounter(), 
//и эта функция имеет доступ к глобальному лексическому окружению, включая currentCount.

//4.Функция, возвращаемая makeCounter, будет вызвана каждый раз при вызове counter() и counter2().
//Она увеличивает currentCount на 1 и возвращает текущее значение.

//2

// let currentCount = 1;

// function makeCounter() {
//     return function() {
//         return currentCount++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter());//1
// alert(counter());//2

// alert(counter2());//3
// alert(counter2());//4
///////////////////////////////////////////////////
//2
// const a = 10

// function kub(a) {
//     return (b, c) => { return a * b * c };
// }

// const kubFoo = kub(a)

// alert(kubFoo(2,3))
// alert(kubFoo(7,2))
// alert(kubFoo(2,34))
// alert(kubFoo(7,14))
/////////////////////////////////////////////////////////////////
//3
function* moveGenerator() {
    let x = 0;
    let y = 0;
  
    for (let i = 0; i < 10; i++) {
      const direction = yield { x, y };
  
      switch (direction) {
        case 'left':
          x--;
          break;
        case 'right':
          x++;
          break;
        case 'up':
          y++;
          break;
        case 'down':
          y--;
          break;
        default:
          console.log('Неверная команда. Используйте left, right, up или down.');
          i--; // Чтобы повторно запросить команду в случае ошибки.
      }
    }
  
    console.log('Объект завершил 10 шагов.');
  }
  
  // Пример использования:
  const generator = moveGenerator();
  
  for (let i = 0; i < 10; i++) {
    const { x, y } = generator.next(prompt('Введите команду (left, right, up, down): ')).value;
    console.log(`Текущие координаты: x = ${x}, y = ${y}`);
  }
  
  