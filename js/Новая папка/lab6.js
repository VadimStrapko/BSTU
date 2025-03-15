//1 Имеется массив numbers. Сохранить первый элемент массива
//   в переменную y используя деструктуризацию
const numbers = [1, 2, 3, 4, 5];
const [y ,secondElement, qwer] = numbers; //синтаксис деструктуризации массива

console.log(y); // Выведет 1
// console.log(secondElement); // Выведет 2

//2.	Объект user имеет свойства name, age. 
//     Создайте объект admin, у которого есть свойства admin
//     и все свойства объекта user. Используйте spread оператор

const user = {
    name: 'John',
    age: 30
  };
  
  // Создаем объект admin с помощью spread оператора
  const admin = {
    admin: true,
    ...user//копирование
  };
  
  console.log(admin);
  

  //3.	Выполнить деструктуризацию объекта store до 3 уровня вложенности.
  // После этого вывести значения likesCount из массива posts. 
  //Выполнить фильтрацию массива dialogs – выбрать пользователей с четными id. 
  //  В массиве messages заменить все сообщения на “Hello user” (использовать метод map).
  let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            dialogsPage: {
                dialogs: [
                    {id: 1, name: 'Valera'},
                    {id: 2, name: 'Andrey'},
                    {id: 3, name: 'Sasha'},
                    {id: 4, name: 'Viktor'},
                ],
                messages: [
                    {id: 1, message: 'hi'},
                    {id: 2, message: 'hi hi'},
                    {id: 3, message: 'hi hi hi'},
                ],
            },
        },
        sidebar: [],
    },
}

let {state: {profilePage: {posts, dialogsPage}}} = store
let {state: {profilePage}} = store
let {state} = store
//раааааааааааааааааааааспакоууууууууууууука
for(let post of posts)
    console.log(post.likesCount)


    let {state: {profilePage: {dialogsPage: {dialogs, messages}}}} = store
    console.log(dialogs)
let oddId = dialogs.filter(function(dialog){
    return dialog.id % 2 === 0;
});
console.log(oddId)


messages = messages.map(mes => ({  message: "Hello user" }));//новый на основе сущ
console.log(messages)

  // Task 4
  console.log("\nTask 4");

  let tasks = [
      {id: 1, title: "HTML&CSS", isDone: true},
      {id: 2, title: "JS", isDone: true},
      {id: 3, title: "ReactJS", isDone: false},
      {id: 4, title: "Rest API", isDone: false},
      {id: 5, title: "GraphQL", isDone: false},
  ];

  let newTasks = [...tasks, {id: 6, title: "SQL", isDone: false}];//создаем новый массив 

  console.log(newTasks);

  // Task 5
  console.log("\nTask 5");

  function sumValues(x, y, z){
      return x + y + z;
  }

  console.log(sumValues(...[1, 2, 3]));//деструктуризация массива
  