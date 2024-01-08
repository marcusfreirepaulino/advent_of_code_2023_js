import fs from 'fs';
import path from 'path';
import { cwd } from 'process';

export function readInput(day) {
    return fs.readFileSync(path.join(cwd(), day, 'input.txt'), 'utf-8').split('\n');
}