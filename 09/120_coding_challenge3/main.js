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
const gameEnvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47,'GOAL'],
    [61, 'Substitution'],
    [64,'Yellow card'],
    [69,'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);
//1
const events = [...new Set(gameEnvents.values())];
console.log(events);
//2
gameEnvents.delete(64);
console.log(gameEnvents);
//3
console.log(`1 sự kiện xảy ra, trung bình mỗi  ${90/gameEnvents.size} phút`);
const time = [...gameEnvents.keys()].pop();
console.log(time);
console.log(`1 sự kiện xảy ra, trung bình mỗi  ${time/gameEnvents.size} phút`);
//4
for (const [x, y] of gameEnvents) {
    let z = x<=45?'[FIRST HALF]':'[SECOND HALF]';
    console.log(`${z} ${x}:${y}`);
}