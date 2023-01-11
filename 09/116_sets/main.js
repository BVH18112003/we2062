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

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Pizza',
    'Pasta',
    'Pho', 
    'Banhmi',
]);// Set sẽ loại bỏ các giá trị trùng lặp 
console.log(ordersSet);
console.log(new Set('Huy'));
console.log(ordersSet.size);// độ dài của mảng
ordersSet.add('Banhcuon');// thêm phần tử vào mảng
ordersSet.add('Banhcuon');
ordersSet.delete('Pasta');// xóa phân tử
console.log(ordersSet);
// ordersSet.clear(); xóa toàn bộ các phần tử của mảng
for(const order of ordersSet) console.log(order);
// VÍ dụ
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef','waiter'];
const staffUnique = [new Set(staff)];
console.log(staffUnique);
console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef','waiter']));
console.log(new Set('BuiVanHuy').size);