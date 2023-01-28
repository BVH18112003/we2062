const flight = 'LH234';
const jonas = {
    name: 'Jonas Schemedtmann',
    passport: 2438552223
} 

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;
    if(passenger.passport === 2438552223){
        alert('Checked in');
    }else{
        alert('Wromg passport');
    }
};
checkIn(flight,jonas);
console.log(flight);
console.log(jonas);

const flightNum = flight;
const passenger = jonas;
const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*100000000);
};

newPassport(jonas);
checkIn(flight, jonas);
