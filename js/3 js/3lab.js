//1. Объедините два массива с вложенностью используя reduce().
//const arr1 = [1, [2, 2, [4, 4]], [2,4]]
//   arr2 = [2, 3, [6, 7, [6, 8], 10]]
//   mergedArr = [arr1, arr2].reduce((accumulator, currentArr) => {
//      return accumulator.concat(currentArr);
//  });
// alert("Объедененный массив: " + mergedArr)
//2. Найдите сумму элементов массива, если вложенность массива неизвестна. 
// const arr1 = [1, [2, 2, [4, 4]], [2, 4]];
// const sum = arr => arr.reduce((accumulator, el) => accumulator + (Array.isArray(el) ? sum(el) : el), 10);
// alert(sum(arr1));
//4+4+10=18
//2+2+10+18=32
//1+10+32=43
//2+4+10+43=69



//3.Напишите функцию, которая на вход принимает массив из студентов, 
//где студент — это объект с полями «имя», «возраст» и «номер группы» 
//{name: string, age: number, groupId: number}, а на выходе возвращает объект, 
//где ключ — это номер группы, а значение — массив из студентов старше 17 лет.
 students = [
    {name: "Dmitry", age: 19, groupId: 5},
    {name: "Gosha", age: 16, groupId: 4},
    {name: "Ilya", age: 18, groupId: 5},
    {name: "Rodion", age: 13, groupId: 5},
    {name: "Marun", age: 20, groupId: 4},
    {name: "Konstantin", age: 21, groupId: 6},
    {name: "Anastasia", age: 17, groupId: 6},
    {name: "Maria", age: 15, groupId: 6},
];

function groupStudentsByAge(students) {
     groupedStudents = {};
  
    students.forEach((student) => {
      // Проверка, что возраст студента больше 17 лет
    if (student.age > 17) {
      // Проверка, существует ли уже массив для groupId студента
      if (groupedStudents[student.groupId]) {
        // Если массив существует, добавляем текущего студента в него
        groupedStudents[student.groupId].push(student);
      } else {
        // Если массив не существует, создаем новый массив с текущим студентом и присваиваем его к ключу groupId
        groupedStudents[student.groupId] = [student];
      }
                                                  }                                              
    });
  
    return groupedStudents;
  }

let adults = groupStudentsByAge(students)
console.log(adults)

// //4. Вам дана строка, состоящая из символов ASCII. 
// //Переведите символы в код - число total1, замените все цифры 7 на 1 - число total2. И вычтите из total1 число total2.
// function calculateTotals(inputString) {
//     let total1 = 0;
//     let total2 = 0;
  
//     for (let i = 0; i < inputString.length; i++) {
//       charCode = inputString.charCodeAt(i);
//       total1 += charCode;
//   let total1Copy = charCode;
//   let multiplier = 1;
//   let char1 = 0;

//   while (total1Copy > 0) {
//      digit = total1Copy % 10;
//      char1 += (digit === 7 ? 1 : digit) * multiplier;
//     multiplier *= 10;
//     total1Copy = Math.floor(total1Copy / 10);
//   }
//   total2 += char1;

//   if (inputString.charCodeAt(i + 1) >= 10 && inputString.charCodeAt(i + 1) < 100)
//   {
//     total2 *= 100;
//     total1 *= 100;
//   }
//       }
//     return [total1, total2];
//   }
  
//   inputString = 'ABCDE';
//  [total1, total2] = calculateTotals(inputString);
  
//   alert('total1 = ' + total1);
//   alert('total2 = ' + total2);
//   alert('Разность = ' + (total1 - total2))
// //5. Создайте функцию, которая принимает несколько объектов 
//в качестве параметров и возвращает НОВЫЙ объект со всеми 
//свойствами из входных объектов. 
//Для объединения объектов и создания НОВОГО объекта использовать метод assign
function extend(...args) {
  return {...args};
}

// Примеры использования
const result1 = extend({ a: 1, b: 2 }, { c: 3 });
console.log(result1); // { a: 1, b: 2, c: 3 }

const result2 = extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 }, { f: 5 });
console.log(result2); // { a: 1, b: 2, c: 3, d: 4 }

const result3 = extend({ a: 1, b: 2 }, { a: 3, c: 3 });
console.log(result3); // { a: 3, b: 2, c: 3 }


// //6 Создайте башню-пирамиду, состоящую из символов "*". В качестве входного параметра приходит число этажей башни.
//   function createPyramidTower(height) {
//     const tower = [];
//     const width = height * 2 - 1;
  
//     for (let i = 1; i <= height; i++) {
//       const stars = '*'.repeat(2 * i - 1);
//       const spaces = ' '.repeat((width - stars.length) / 2);
//       const row = spaces + stars + spaces;
//       tower.push(row);
//     }   
  
//     return tower;
//   }
  
//   const towerHeight = 6;
//   const tower = createPyramidTower(towerHeight);
  
//   tower.forEach((row) => {
//     console.log(row);
//   });