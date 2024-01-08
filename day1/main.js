import { readInput } from '../read-input.js';

const input = readInput('day1');

let result = 0;

input.forEach((row) => {
    let first = '';
    let last = '';

    for (let i = 0; i < row.length; i++) {
        if (!isNaN(row.at(i))) {
            first = row.at(i);

            break;
        }
    }

    for (let i = -1; -i < row.length; i--) {
        if (!isNaN(row.at(i))) {
            last = row.at(i);

            break;
        }
    }

    if (!last) {
        last = first;
    }

    result += Number(first + last);
})

console.log('part one: ', result);

result = 0;

const targets = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
]

input.forEach((row) => {
    let first = '';
    let last = '';

    for (let i = 0; i < row.length; i++) {
        if (!isNaN(row.at(i))) {
            first = row.at(i);

            break;
        }

        for (let j in targets) {
            if (row.slice(i, i + targets.at(j).length) === targets.at(j)) {
                first = targets.at(j);
                break;
            }
        }

        if (first) {
            break;
        }
    }

    for (let i = -1; -i < row.length; i--) {
        if (!isNaN(row.at(i))) {
            last = row.at(i);

            break;
        }

        for (let j in targets) {
            if (row.slice(-targets.at(j).length) === targets.at(j)) {
                last = targets.at(j);
                break;
            }

            if (row.slice(i - targets.at(j).length, i) === targets.at(j)) {
                last = targets.at(j);
                break;
            }
        }

        if (last) {
            break;
        }
    }
    
    if (!last) {
        last = first;
    }

    first = isNaN(first) ? String(targets.indexOf(first) + 1) : first; 
    last = isNaN(last) ? String(targets.indexOf(last) + 1) : last; 

    result += Number(first + last);
})

console.log('part two: ', result);
