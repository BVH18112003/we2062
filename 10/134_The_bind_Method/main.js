const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: funcition(){}
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    },
};
// lufthansa.book(1811, 'Bùi Văn Huy');
// lufthansa.book(2011, 'Nguyễn Như Ngọc');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};
const book = lufthansa.book;

// Does NOT work
// book(23, 'Bùi Văn Huy');

//Call method
// book.call(eurowings, 18, 'Huy'); // eurowings thay thế this
// console.log(eurowings);

// book.call(lufthansa, 18, 'Huy');
// console.log(lufthansa);

const swiss  = {
    airline: 'HuyNgoc',
    iataCode: 'HN',
    bookings: [],
};
//Apply method 
// const flightData = [583, 'George Cooper'];// apply khác với call là sử dụng mảng chứ ko phải từng gtri
// book.apply(swiss, flightData);
// console.log(swiss);
// book.call(swiss, ...flightData);
// bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(18, 'Huy');

const bookEW18 = book.bind(eurowings, 18);
bookEW18('Huy');
bookEW18('Ngoc');

//With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
document.querySelector('h1').addEventListener('click', lufthansa);

//Psrtial application
const addTax = (rate, value) => value+value*rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value=> value+value*0.23;

console.log(addVAT(100));
console.log(addVAT(20));
const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.18);
console.log(addVAT2(180));
console.log(addVAT2(200));
