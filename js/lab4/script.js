// // //1-----------------------------------------------------

// // Создаем множество для хранения товаров
// const productList = new Set();

// // Функция для добавления товара в список
// function addProduct(product) {
//   productList.add(product);
//   console.log(`Товар "${product}" добавлен в список.`);
// }

// // Функция для удаления товара из списка
// function removeProduct(product) {
//   if (productList.has(product)) {
//     productList.delete(product);
//     console.log(`Товар "${product}" удален из списка.`);
//   } else {
//     console.log(`Товар "${product}" не найден в списке.`);
//   }
// }

// // Функция для проверки наличия товара в списке
// function checkProduct(product) {
//   if (productList.has(product)) {
//     console.log(`Товар "${product}" присутствует в списке.`);
//   } else {
//     console.log(`Товар "${product}" отсутствует в списке.`);
//   }
// }

// // Функция для определения количества товара в списке
// function countProducts() {
//   console.log(`Количество товаров в списке: ${productList.size}`);
// }

// // Пример использования функций
// addProduct('Мышь');
// addProduct('Клавиатура');
// checkProduct('Мышь');
// countProducts();
// removeProduct('Мышь');
// checkProduct('Мышь');
// countProducts();
//add delete sort set entries from filter 

//2-----------------------------------------------------
const studentSet = new Set();

function addStudent(studentNumber, group, fullName) {
  const student = { studentNumber, group, fullName };
  studentSet.add(student);
  console.log(`Студент ${fullName} добавлен в список.`);
}

function removeStudentByNumber(studentNumber) {
  const removeStudent = findStudentByNumber(studentNumber);
  if (removeStudent) {
    studentSet.delete(removeStudent);
    console.log(`Студент ${removeStudent.fullName} удален из списка.`);
  } else {
    console.log(`Студент с номером зачетки ${studentNumber} не найден в списке.`);
  }
}

function filterStudentsByGroup(group) {
  const filteredStudents = Array.from(studentSet).filter(student => student.group === group);
  console.log(`Студенты в группе ${group}:`, filteredStudents);
}

function sortStudentsByNumber() {
  const sortedStudents = Array.from(studentSet).sort((a, b) => a.studentNumber - b.studentNumber);
  console.log('Отсортированный список студентов по номеру зачетки:', sortedStudents);
}

function findStudentByNumber(studentNumber) {
  return Array.from(studentSet).find(student => student.studentNumber === studentNumber);
}

// Пример использования функций
addStudent(1, 'Group A', 'Иванов Иван Иванович');
addStudent(2, 'Group B', 'Петров Петр Петрович');
addStudent(3, 'Group A', 'Сидоров Сидор Сидорович');
addStudent(4, 'Group B', 'Страпко Вадим Юрьевич');

removeStudentByNumber(2);

filterStudentsByGroup('Group B');

sortStudentsByNumber();


//3-----------------------------------------------------
//Создаем коллекцию Map для хранения товаров
const productMap = new Map();

// Функция для добавления товара
function addProduct(id, name, quantity, price) {
  const product = { name, quantity, price };
  productMap.set(id, product);
  console.log(`Товар "${name}" добавлен в хранилище.`);
}

// Функция для удаления товара по id
function removeProductById(id) {
  if (productMap.has(id)) {
    const removedProduct = productMap.get(id);
    productMap.delete(id);
    console.log(`Товар "${removedProduct.name}" удален из хранилища по id.`);
  } else {
    console.log(`Товар с id ${id} не найден в хранилище.`);
  }
}

// Функция для удаления товаров по названию
function removeProductsByName(name) {
  let removedCount = 0;
  for (const [id, product] of productMap.entries()) {
    if (product.name === name) {
      productMap.delete(id);
      removedCount++;
    }
  }
  console.log(`Удалено ${removedCount} товаров с названием "${name}".`);
}

// Функция для изменения количества товара
function updateQuantity(id, newQuantity) {
  if (productMap.has(id)) {
    const product = productMap.get(id);
    product.quantity = newQuantity;
    console.log(`Количество товара "${product.name}" изменено на ${newQuantity}.`);
  } else {
    console.log(`Товар с id ${id} не найден в хранилище.`);
  }
}

// Функция для изменения стоимости товара
function updatePrice(id, newPrice) {
  if (productMap.has(id)) {
    const product = productMap.get(id);
    product.price = newPrice;
    console.log(`Стоимость товара "${product.name}" изменена на ${newPrice}.`);
  } else {
    console.log(`Товар с id ${id} не найден в хранилище.`);
  }
}

// Функция для расчета количества позиций в списке
function calculateItemCount() {
  console.log(`Всего ${productMap.size} позиций в хранилище.`);
}

// Функция для расчета суммы стоимости всех товаров
function calculateTotalCost() {
  let totalCost = 0;
  for (const product of productMap.values()) {
    totalCost += product.quantity * product.price;
  }
  console.log(`Общая стоимость всех товаров: ${totalCost}.`);
}

// Пример использования функций
addProduct(1, 'Мышь', 5, 20);
addProduct(2, 'Клавиатура', 3, 30);
addProduct(3, 'Мышь', 2, 25);

removeProductById(2);

removeProductsByName('Мышь');

updateQuantity(1, 8);

updatePrice(3, 35);

calculateItemCount();

calculateTotalCost();


//4-----------------------------------------------------
//Создаем WeakMap для кэширования результатов

const cache = new WeakMap();

function calculateResult(input) {
  if (cache.has(input)) {
    console.log('Берем результат из кэша');
    return cache.get(input);
  }

  let result = input.s * 2;

  cache.set(input, result);

  console.log('Выполняем вычисления и сохраняем результат в кэше');
  return result;
}

const input1 ={s: 5};
const input2 = {s: 10};

console.log(calculateResult(input1));
console.log(calculateResult(input1)); 
console.log(calculateResult(input2)); 
console.log(calculateResult(input2)); 