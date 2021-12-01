const fs = require('fs');
module.exports = { day1 }

function day1(path = './2021/day1/input.txt') {
    fs.promises.readFile(path, { encoding: 'utf-8' })
        .then((result) => {
            console.log(`Day 1\n`);
            const input = result.toString().trim().split('\n').map(Number);

            try {
                let task1 = 0;
                for (let i = 1; i < input.length; i++) {
                    if (input[i] > input[i - 1]) task1++;
                }
                console.log(`Puzzle 1: ${task1}`, '✩');
            } catch (err) {
                console.error(err)
            }

            try {
                let prev = 0;
                let task2 = 0;
                for (let i = 2; i < input.length; i++) {
                    let sum = input[i - 1] + input[i] + input[i + 1];
                    if (sum > prev) task2++
                    prev = sum;
                }
                console.log(`Puzzle 2: ${task2}`, '✩');
            } catch (err) {
                console.error(err)
            }

            console.log('\r');
        })
        .catch((error) => console.log(error))
}