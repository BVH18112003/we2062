const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    };
};
const greetHey = greet('Hey');
greetHey('Huy');
greetHey('Ngoc');

greet('Hello')('Huy');
//Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Huy');