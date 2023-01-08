'use strict';
const resataurant ={
    name: 'Huy',
    location: 'Tan Minh, Thuong Tin, Ha Noi, VietNam',
    categories: ['Italian', 'Pizzeria', 'Vegertarian','Oraganic'],
    starterMenu: ['Banh Mi', 'Salad', 'Pudding'],
    mainMenu: ['Pho', 'Bun cha', 'Com suon'],
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

   
    
};
resataurant.orderDeliry({
    time: '22:30',
    address: 'Ha Noi',
    mainIndex: 2,
    starterIndex: 2,
});
resataurant.orderDeliry({
    address: 'HCM',
    
});
// Lấy thuộc tính của đối tượng restaurant

const {name, openingHours, categories}= resataurant;
console.log(name, openingHours, categories);
// Lấy thuộc tính của đối tượng restaurant và đặt tên

const {name: resataurantName, openingHours: hour, categories:tag}= resataurant;
console.log(resataurantName, hour,tag);
// Gán cho thuộc tính của restaurant một giá trị 

const {menu = [], starterMenu: starter = []} = resataurant;
console.log(menu, starter);//Không thay đổi giá trị ban đầu của thuộc tính
// Thay đổi giá trị của biến

let a = 18;
let b= 20;
const obj = {a:23, b:7, c:14};
//{a,b} = obj; sẽ báo lỗi không đc gán dấu "="
//Để thay đổi đc thì ta phải thêm ()
({a,b} = obj);
console.log(a,b);
// các đối tượng lồng nhau

// const {fri}=openingHours; Lấy thuộc tính fri của openingHours 
// console.log(fri);
// Lấy chi tiết thuộc tính fri
const {fri: {open, close}}= openingHours;
console.log(open, close);
