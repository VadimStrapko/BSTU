function CreateNumber(numberArr: number[]): string {
    if (numberArr.length != 10)
        return "Превышено кол-во цифр";
    for (const number of numberArr) {
        if (number > 9 || number < 0) {
            return "Допустимы лишь цифры";
        }
    }
    return String('(' + numberArr[0] + numberArr[1] +
        numberArr[2] + ') ' + numberArr[3] + numberArr[4] +
        numberArr[5] + '-' + numberArr[6] + numberArr[7] + numberArr[8] +
        numberArr[9]);
}

let phone: string;
phone = CreateNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phone);

// 2
class Challenge {
    static solution(number: number) {
        if (number < 0)
            return 0;
        else {
            let sum: number = 0;

            for (let i = 1; i < number; i++) {
                if (i % 3 == 0 || i % 5 == 0) {
                    sum += i;
                }
            }

            return sum;
        }
    }
}
console.log(Challenge.solution(5));

// 3
function swapArr(arr: number[], k: number): number[] | null {
    if (k == 0)
        return arr;
    if (arr.length == 0)
        return null;

    let newArr: number[] = [];
    for (let i = 0; i < k; i++)
        newArr[i] = arr[arr.length - (k - i)];

    for (let i = 0; i < arr.length - k; i++)
        newArr[k + i] = arr[i];

    return newArr;
}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log(swapArr(arr, 3));

// 4    
function GetMedian(arrnum1: number[], arrnum2: number[]): number | null {
    if (arrnum1.length == 0 && arrnum2.length == 0)
        return null;

    let arr = arrnum1.concat(arrnum2).sort();

    if (arr.length % 2 == 0)
        return (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
    else
        return (arr[((arr.length - 1) / 2)]);
}

console.log(GetMedian([1, 3], [20]));
console.log(GetMedian([1, 2], [3, 8]));



let students = [
    { name: "Вадим", id: 1, ball: 12 },
    { name: "Саша", id: 2, ball: 1 },
    { name: "Егор", id: 3, ball: 2 }
]
function qwer(students): void {
    const qwer1=students.filter(student=> student.name[0]=="Е");
    qwer1.forEach(students => {
        console.log(` ID: ${students.id}`);
   
        
    });
    students.forEach(students => {
        console.log(`Name: ${students.name}, ID: ${students.id}, Ball: ${students.ball}`);
   
        
    });

}
qwer(students);


