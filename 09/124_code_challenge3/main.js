const underscore = function(name){
    const [name1, name2] = name.toLowerCase().trim().split('_');
    const underscoreUpper = [];
    underscoreUpper.push(name1.replace(name1[0],name1[0].toLowerCase()));
    underscoreUpper.push(name2.replace(name2[0],name2[0].toUpperCase()));
    console.log(underscoreUpper.join(''));
}

underscore('underscore_case');
underscore('first_name');
underscore('Some_Variable');
underscore('calculate_AGE');
underscore('delayed_departure');
let x = null;
let y = 15;
x ||= y;
console.log(x);
const a = { duration: 50, title: null };
            const b = 20;

            a.duration ||= 10;
            console.log(a.duration);

            a.title ||= b;
            console.log(a.title);