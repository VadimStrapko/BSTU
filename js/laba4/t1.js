/*
Имеется список товаров. Реализуйте функции, которые добавляют, 
удаляют товар из списка, проверяет наличие товара. 
Определите количество имеющихся товаров.Используйте коллекцию Set.  
*/

let action;//хранение действия
let shopList = new Set();
let flag = true;//управление циклом
let thing;//хранение названия товара

while(flag)
{
    action = prompt("Выберите действие со списком:\n1 - добавить товар\n2 - удалить товар\n3 - проверить наличие товара\n4 - выход из программы\n", "");
    switch(action)
    {
        case "1":
        {
            thing = prompt("Введите название товара, который хотите добавить: ", "");
            if(Add(thing, shopList)) alert(`Текущий список: " ${ShowList(shopList)}\nКол-во товаров: ${shopList.size}`);
            break;
        }
        case "2": 
        {
            thing = prompt("Введите название товара, который хотите удалить: ", "");
            if(Delete(thing, shopList)) alert(`Текущий список: " ${ShowList(shopList)}\nКол-во товаров: ${shopList.size}`);
            break;
        }
        case "3":
        {
            thing = prompt("Введите название товара, который хотите найти: ", "");
            alert((shopList.has(thing)) ? "Товар найден" : "Товар отсутствует в списке");
            break;
        }
        case "4":
        {
            flag = false;
            alert("Вы вышли из программы!");
            break;
        }
        default:
            alert("Выбран неверный пункт! Повторите ввод!\n");
    }
}
//преобразование Set в массив(отбражение текущего списка)
function ShowList(list){
    //для хранения элементов из переданного массива
    let arr = [];
    for(let thing of list){
        arr.push(thing);
    }
    return arr;
}
//добавление
function Add(item, list){
    if(item == ""){
        alert("Некорректное название товара")
        return false;
    }
    if(list.has(item.toLowerCase())){
        alert("Такой товар уже есть в списке! Товар не был добавлен");
        return false;
    }
    list.add(item.toLowerCase());
    return true;
}
//удаление
function Delete(item, list){
    if(list.delete(item)){
        alert("Товар успешно удален!");
        return true;
    }
    else{
        alert("Не удалось удалить товар!");
        return false;
    }
}