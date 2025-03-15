type id = number;
type size = number;
type color = string;
type price = number;
type item = {id: id, size: size, color: color, price: price}
type category = item[];
type all = {Boots:category, Sneakers:category, Sandals:category};
type storage = {shoes: all};

let products:storage =
{
    shoes:
    {
        Boots:
        [
            {id: 1, size: 40, color: "red", price: 110},
            {id: 2, size: 41, color: "brown", price: 120},
            {id: 3, size: 42, color: "black", price: 125}
        ],          
        Sneakers:
        [
            {id: 4, size: 42, color: "white", price: 140},
            {id: 5, size: 44, color: "grey", price: 150},
            {id: 6, size: 45, color: "green", price: 200}
        ],
        Sandals:
        [
            {id: 7, size: 40, color: "yellow", price: 135},
            {id: 8, size: 43, color: "blue", price: 145},
            {id: 9, size: 41, color: "red", price: 115},
            {id: 10, size: 42, color: "black", price: 125}
        ]
    }
}
// 2
class ProductIterator{
    private readonly items:item[] = [];
    private readonly length:number;
    private position:number = -1;
    constructor(item:storage) {
        let buff:item[]=item.shoes.Boots.concat(item.shoes.Sandals);
        this.items = buff.concat(item.shoes.Sneakers);
        this.length = item.shoes.Boots.length + item.shoes.Sneakers.length + item.shoes.Sandals.length
    }

    public getByIndex(i:number):item | string
    {
        if (i < 0 || i > this.length) return "Выход из диапазона";
        return this.items[i];
    }
}
console.log("\niterator")
const iterator = new ProductIterator(products);

console.log("\n",iterator.getByIndex(0));
// 3
function sort(start_price: price, end_price: price, color: color, size: size):void
{
    let result1 = products.shoes.Boots.filter((item) =>
        item.price > start_price &&
        item.price < end_price &&
        item.color === color &&
        item.size === size
    )
    let result2 = products.shoes.Sneakers.filter((item) =>
        item.price > start_price &&
        item.price < end_price &&
        item.color === color &&
        item.size === size
    )
    let result3 = products.shoes.Sandals.filter((item) =>
        item.price > start_price &&
        item.price < end_price &&
        item.color === color &&
        item.size === size
    )
    let buff = result1.concat(result2);
    let result = buff.concat(result3);
    for (let item of result) console.log(item.id);
}
console.log("sort");
sort(100, 150, "black", 42);
//5
type new_item = {id: id, size: size, color: color, price: price, discount:number, get end_price():number}
type new_category = new_item[];
type new_all = {Boots:new_category, Sneakers:new_category, Sandals:new_category};
type new_storage = {shoes: new_all};

let newProducts:new_storage=
    {
    shoes:
        {
        Boots:
            [
                {id: 1, size: 40, color: "red", price: 110, discount: 50, get end_price():number{return this.price - this.price * this.discount / 100} },
                {id: 2, size: 41, color: "brown", price: 120, discount: 55, get end_price():number{return this.price - this.price * this.discount / 100} },
                {id: 3, size: 42, color: "black", price: 125, discount: 45, get end_price():number{return this.price - this.price * this.discount / 100} }
            ],
        Sneakers:
            [
                {id: 4, size: 42, color: "white", price: 140, discount: 10, get end_price():number{return this.price - this.price * this.discount / 100} },
                {id: 5, size: 44, color: "grey", price: 150, discount: 20, get end_price():number{return this.price - this.price * this.discount / 100} },
                {id: 6, size: 45, color: "green", price: 200, discount: 30, get end_price():number{return this.price - this.price * this.discount / 100} }
            ],
        Sandals:
            [
                {id: 7, size: 40, color: "yellow", price: 135, discount: 25, get end_price():number{return this.price - this.price * this.discount / 100} },
                {id: 8, size: 43, color: "blue", price: 145, discount: 5, get end_price():number{return this.price - this.price * this.discount / 100} },
                {id: 9, size: 41, color: "red", price: 115, discount: 1, get end_price():number{return this.price - this.price * this.discount / 100} }
            ]
        }
    };
console.log("\ngetter");

for(let item of newProducts.shoes.Boots) console.log("end_price: ", item.end_price);
for(let item of newProducts.shoes.Sneakers) console.log("end_price: ", item.end_price);
for(let item of newProducts.shoes.Sandals) console.log("end_price: ", item.end_price);

