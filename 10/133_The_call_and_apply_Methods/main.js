const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: funcition(){}
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    },
};
lufthansa.book(1811, 'Bùi Văn Huy');
lufthansa.book(2011, 'Nguyễn Như Ngọc');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};
const book = lufthansa.book;

// Does NOT work
// book(23, 'Bùi Văn Huy');

//Call method
book.call(eurowings, 18, 'Huy'); // eurowings thay thế this
console.log(eurowings);

book.call(lufthansa, 18, 'Huy');
console.log(lufthansa);

const swiss  = {
    airline: 'HuyNgoc',
    iataCode: 'HN',
    bookings: [],
};
//Apply method 
const flightData = [583, 'George Cooper'];// apply khác với call là sử dụng mảng chứ ko phải từng gtri
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData); 