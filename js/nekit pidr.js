
    // let a = 5; //number
    // let name = "name"; //string
    // let i = 0; //number
    // let double = 0.23; //number
    // let result = 1 / 0; //undefined
    // let answer = true; //boolean
    // let no = null; //null
    
    /////////////////////////////////////////////////////////////////
    // let Ssq, Ste, B = 5, A = 45, I = 21;
    // let res;
    // Ste = A * I;
    // Ssq = B * B;
    // res = Ste / Ssq - 1;
    // alert(Math.floor(res));
    /////////////////////////////////////////////////////////////////
    // let q = 2;
    // let w = q++;
    // let r = ++q;
    // var resu = w > r ? "первое число больше" : "второе число больше";
    // alert(resu);
    
   /////////////////////////////////////////////////////////////////
    // var num1 = prompt("Введите первые данные");
    // var num2 = prompt("Введите вторые данные");
    // var re = num1 > num2 ? "Данные равны" : "Данные не равны";
    // alert(re);
    /////////////////////////////////////////////////////////////////
    // var arr = ["Страпко Вадим Юрьевич", "Страпко", "Вадим", "Юрьевич", "СТРАПКО ВАДИМ ЮРЬЕВИЧ", "СТРАПКО", "ВАДИМ", "ЮРЬЕВИЧ"];
    // var FIO = prompt("Введите ФИО");
    // var g = false;
    // for (var j = 0; j < arr.length; j++) {
    //   if (arr[j] === FIO) {
    //     g = true;
       
    //   }
    // }
    // if (g) {
    //   alert("Страпко Вадим Юрьевич");
    // } else {
    //   alert("Неверное значение");
    // }
    
    /////////////////////////////////////////////////////////////////
    // var angl = prompt("Сдал ли студент английский?");
    // var math = prompt("Сдал ли студент математику?");
    // var rus = prompt("Сдал ли студент русский?");
    // if (angl === "да" && math === "да" && rus === "да") {
    //   alert("Студента переведут на следующий курс");
    // } else if (angl === "нет" && math === "нет" && rus === "нет") {
    //   alert("Студента отчислят");
    // } else {
    //   alert("У студента пересдача");
    // }
    /////////////////////////////////////////////////////////////////
    // let ex13_1 = true + true;
    // let ex13_2 = 0 + "5";
    // let ex13_3 = 5 + "mm";
    // let ex13_4 = 8 / Infinity;
    // let ex13_5 = 9 * "\n9";
    // let ex_13_6 = null - 1;
    // let ex13_7 = "5" - 2;
    // let ex13_8 = "5px" - 3;
    // let ex13_9 = true - 3;
    // let ex13_10 = 7 || 0;
    /////////////////////////////////////////////////////////////////
// var arr = [1,2,3,4,5,6,7,8,9,10];
  
// for (var r = 0; r < 10; r++) {
  
//   if (arr[r] % 2 === 0) {
    
    
//     alert(arr[r]+2);
    
//   }else {
//     if(arr[r]%2!=0){
//     alert(arr[r]+"мм")
//   }
// }
// }
/////////////////////////////////////////////////////////////////
// var arr=[0,1,2,3,4,5,6,7]
// var  i=prompt("Введите номер дня");
// switch(arr[i]){
//   case 1:
//     alert("понедельник");
//   break;
//   case 2:
//     alert("вторник");
//     break;
//     case 3:
//       alert("среда");
//       break;
//       case 4:
//         alert("четверг");
//       break;
//       case 5:
//         alert("пятница");
//       break;
//       case 6:
//         alert("суббота");
//       break;
//       case 7:
//         alert("воскресенье");
//       break;
// }
/////////////////////////////////////////////////////////////////
//ex_10
function combineParameters(param1 = "не", param2, param3) {
  if (param3 === undefined) {
      param3 = prompt("Введите третий параметр:");
  }
  return param1, param2, param3;
}

const firstParam = "от";
const secondParam = "работать";

const res = combineParameters(firstParam, secondParam);

alert(res);

//ex_11
//Function Declaration:
function params(a, b) {
  if (a === b) {
      return 4 * a; // Периметр квадрата
  } else {
      return a * b; // Площадь прямоугольника
  }
}

//Function Expression:
const params = function(a, b) {
  if (a === b) {
      return 4 * a; // Периметр квадрата
  } else {
      return a * b; // Площадь прямоугольника
  }
};

//Функция-стрелок:
const params = (a, b) => {
  if (a === b) {
      return 4 * a; // Периметр квадрата
  } else {
      return a * b; // Площадь прямоугольника
  }
};

