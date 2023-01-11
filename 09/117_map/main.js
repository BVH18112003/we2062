'use strict';
const openingHours =  {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close:23,
    },
    sat: {
        open: 0,
        close: 24,
    },
};
const resataurant ={
    name: 'Huy',
    location: 'Tan Minh, Thuong Tin, Ha Noi, VietNam',
    categories: ['Italian', 'Pizzeria', 'Vegertarian','Oraganic'],
    starterMenu: ['Banh Mi', 'Salad', 'Pudding'],
    mainMenu: ['Pho', 'BunCha', 'ComSuon'],
    // kí tự đối tượng nâng cao ES6
    openingHours,
    // order : function(starterIndex, mainMenuIndex){
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]]
    // }, Viết hàm ko cần funcition
    order(starterIndex, mainMenuIndex){
             return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]]
         },
    orderDeliry({starterIndex = 1, mainIndex = 2, time = '20:00', address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderComga(ing1, ing2, ing3){
        console.log(`Here is your declicious comga with ${ing1}, ${ing2}, ${ing3} `);
    },
    orderBanhmi(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(...otherIngredients);
    },
    
};

const rest = new Map();
rest.set('name', 'Bùi Văn Huy');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Potugal'));
rest
.set('categories', ['Italian', 'Pizzeria', 'Vegertarian','Oraganic'] )
.set('open', 11)
.set('close', 23)
.set(true, 'We are open:D')
.set(false, 'We are closed :(');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 23;
console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
const arr = [1,2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
