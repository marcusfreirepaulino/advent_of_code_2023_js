import { readInput } from '../read-input.js';

const input = readInput('day2');

const cubeLimits = { red: 12, green: 13, blue: 14 }

function isGamePossible(game, limit) {
    return game.red <= limit.red && game.green <= limit.green && game.blue <= limit.blue;
}

let result = 0;

input.forEach((row) => {
    let isPossible = true;
    const split = row.split(':');
    const gameID = split[0].replace('Game ', '');
    const subsets = split[1].split(';').map((subset) => subset.replaceAll(' ', ''));

    subsets.forEach((subset) => {
        if (isPossible) {
            let red = 0;
            let green = 0;
            let blue = 0;
    
            subset.split(',').forEach((cubes) => {
                if (cubes.includes('red')) {
                    red = Number(cubes.replace('red', ''));
                } else if (cubes.includes('green')) {
                    green = Number(cubes.replace('green', ''));
                } else {
                    blue = Number(cubes.replace('blue', ''));
                }
            })
            isPossible = isGamePossible({ red, green, blue }, cubeLimits);
        }
    })
    
    if (isPossible) {
        result += Number(gameID); 
    }
})

console.log('part one: ', result);

result = 0;

input.forEach((row) => {
    let minRed = 0;
    let minGreen = 0;
    let minBlue = 0;

    const split = row.split(':');
    const subsets = split[1].split(';').map((subset) => subset.replaceAll(' ', ''));
    
    subsets.forEach((subset) => {
        subset.split(',').forEach((cubes) => {
            if (cubes.includes('red')) {
                const subsetRed = Number(cubes.replace('red', ''));
                minRed = subsetRed > minRed ? subsetRed : minRed;
            } else if (cubes.includes('green')) {
                const subsetGreen = Number(cubes.replace('green', ''));
                minGreen = subsetGreen > minGreen ? subsetGreen : minGreen;
            } else {
                const subsetBlue = Number(cubes.replace('blue', ''));
                minBlue = subsetBlue > minBlue ? subsetBlue : minBlue;
            }
        })
    })
    
    result += minRed * minGreen * minBlue;
})

console.log('part two: ', result);
