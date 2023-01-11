'use strict';
const game={
    team1: 'Bayern Munich',
    team2: 'Brrussia Dortmund',
    players: [
        [
            'Never',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanjs',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',

        ],
    ],
    score: '4:0',
    scored:['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds:{
        team1: 1.33,
        x:3.25,
        team2: 6.5,
    },
    
}
//1 
 for(const [x,y] of game.scored.entries()){
console.log(`Goal ${x+1}: ${y}`);
}
//2
let avg = 0;
const odds = Object.values(game.odds);
for(const odd of odds) avg+=odd;
avg/=odds.length;
console.log(avg);
//3 
for(const[team, odds] of Object.entries(game.odds)){
    const teamStr = team === 'x'? `hòa của draw`:`thắng của ${game[team]}`;
    console.log(`Tỉ lệ ${teamStr}: ${odds}`);
}

