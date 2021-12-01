require('fs').promises.readFile('aoc.txt', { encoding: 'utf-8' })
    .then((aoc) => { console.log(aoc) })
    .then(require('./2021/day1/puzzles').day1())