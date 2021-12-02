const day1 = require('./2021/day1/puzzles');
const day2 = require('./2021/day2/puzzles');

require('fs').promises.readFile('aoc.txt', { encoding: 'utf-8' })
    .then((aoc) => { console.log(aoc) })
    .then(async () => { await day1.puzzles() })
    .then(async () => { await day2.puzzles() })