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
resataurant.orderDeliry({
    time: '22:30',
    address: 'Ha Noi',
    mainIndex: 2,
    starterIndex: 2,
});
resataurant.orderDeliry({
    address: 'HCM',
    
});

//Phân biệt sqread và rest

// Spread sẽ ở bên phải của dấu =
const arr = [1, 2 ,...[3,4]];

// Rest sẽ ở bên trái của dấu =
const [a,b,...other]=[1,2, 18, 20, 11];// ...other sẽ nhận những giá trị còn lại
console.log(a, b, ...other);

const [pho, ,comsuon, ...otherFood ]= [
    ...resataurant.mainMenu,
     ...resataurant.starterMenu
];
// Trường hợp chúng ta ko thể lấy đc giá trị cho buncha vì ...otherFood đã lấy hết các phần tử còn lại
// const [pho, ,comsuon, ...otherFood, buncha ]= [
//     ...resataurant.mainMenu,
//      ...resataurant.starterMenu
// ];
console.log(pho,comsuon, ...otherFood);
// Đối tượng
const {thu, ...weeksday}= resataurant.openingHours;
console.log(weeksday);
// 2) Hàm

const add = function(...number){
let sum = 0;
for(let i= 0; i<number.length; i++)
sum+=number[i];
console.log(sum);
}// cách này giúp ta tính tổng vói số lượng các giá trị có thể thay thổi bằng cách gộp chúng lại thành ...number 
add(2,3);
add(5,3,7,2);
add(8,25,3,1,4,5);

const x = [18, 20, 11];
add(...x);

resataurant.orderBanhmi('Bánh mì', 'Pate', 'Xúc xích', 'Salad');
resataurant.orderBanhmi('Bánh mì');
//Spread được sử dụng khi ta viết các giá trị phân tích bằng dấu phẩy.
//Mẫu phần còn lại về cơ bản được sử dụng trong đó chúng ta sẽ viết các tên biến được phân tách bằng dấu phẩy chứ không phải các giá trị được phân tích bằng dấu phẩy