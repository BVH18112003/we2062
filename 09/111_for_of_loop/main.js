'use strict';
const resataurant ={
    name: 'Huy',
    location: 'Tan Minh, Thuong Tin, Ha Noi, VietNam',
    categories: ['Italian', 'Pizzeria', 'Vegertarian','Oraganic'],
    starterMenu: ['Banh Mi', 'Salad', 'Pudding'],
    mainMenu: ['Pho', 'BunCha', 'ComSuon'],
    openingHours: {
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
    },
    order : function(starterIndex, mainMenuIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]]
    },
    orderDeliry: function({starterIndex = 1, mainIndex = 2, time = '20:00', address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderComga: function(ing1, ing2, ing3){
        console.log(`Here is your declicious comga with ${ing1}, ${ing2}, ${ing3} `);
    },
    orderBanhmi: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(...otherIngredients);
    },
    
};
// vòng lặp for-of
const menu = [...resataurant.mainMenu, ...resataurant.starterMenu];
for(const item of menu) console.log(item);
for(const item of menu.entries())console.log(item);
for(const [i, el] of menu.entries()){
    console.log(`${i}: ${el}`);
}
