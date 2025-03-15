//1
// function basicOperation(operation, value1, value2)
// {
    
//     // result= value1+value2;
//     //  result =value1-value2;
//     //   result =value1*value2;
//       result =value1/value2;
//     return result;
// }
//  let returnValue1=basicOperation('+',5,10);
//  let returnValue2=basicOperation('-',5,10);
//  let returnValue3=basicOperation('*',5,10);
//let returnValue4=basicOperation('/',5,10);
//  alert(returnValue1);
//  alert(returnValue2);
//  alert(returnValue3);
 //alert(returnValue4);
/////////////////////////////////////////////////////////////////////
//2
// function sumOfCubes(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i ** 3;
//     }
//     return sum;
// }
// let n = 5; 
// let result = sumOfCubes(n);
// alert(result); 
/////////////////////////////////////////////////////////////////////
//3
// function average(array) {
    
//     if (array.length === 0) {
//         return 0;  
//     }

//     const sum = array.reduce((suчm, current) => sum + current, 0);
//     const average = sum / array.length;
//     return average;
// }
// const numbers = [1, 2, 3, 4, 5];
// const result = average(numbers);
// alert(result);
/////////////////////////////////////////////////////////////////////
//4
// function foo(str) {
//     return str.replace(/[а-яА-Я]/g, '');
// }
// let str = "JavaScr53э?ipt";
// let result = foo(str);

// function foo2(result)
// {
//     return result.split('').reverse().join('');
// }
// let result2=foo2(result);
// alert(result2);
/////////////////////////////////////////////////////////////////////
//5
// function repStr(s, n) {
//     if (n <= 0) {
//         return ""; 
// }
//     return s.repeat(n);
// }

// let inputString = "qwer";
// let repeatCount = 3;
// let result = repStr(inputString, repeatCount);
// alert(result); 
/////////////////////////////////////////////////////////////////////
//6
// function getUniqueStrings(arr1, arr2) {
//     let arr3 = [];

//     for (let str of arr1) {
//         if (!arr2.includes(str)) {
//             arr3.push(str);
//         }
//     }

//     return arr3;
// }
// let arr1 = ["qw", "er", "ty", "ui"];
// let arr2 = ["qw", "ty", "op"];
// let result = getUniqueStrings(arr1, arr2);
// alert(result); 