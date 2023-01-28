'user strict';
const boookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = numPassengers*199){
    const boooking = {
        flightNum,
        numPassengers ,
        price,
    };
    console.log(boooking);
    boookings.push(boooking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);