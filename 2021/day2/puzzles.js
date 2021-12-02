const fs = require('fs');
module.exports = { puzzles }

async function puzzles(path = './2021/day2/input.txt') {
    fs.promises.readFile(path, { encoding: 'utf-8' })
        .then((result) => {
            console.log(`Day 2\n`);
            const input = result.toString().trim().split('\n');

            try {
                let task1 = 0, x = 0, y = 0;
                for (let i = 0; i < input.length; i++) {
                    let move = input[i].split(' ');
                    switch (move[0]) {
                        case 'up': x -= +move[1]; break;
                        case 'down': x += +move[1]; break;
                        case 'forward': y += +move[1]; break;
                    }
                }
                task1 = x * y;
                console.log(`Puzzle 1: ${task1}`, '✩');
            } catch (err) {
                console.error(err)
            }

            try {
                let task2 = 0, x = 0, y = 0, z = 0;
                for (let i = 0; i < input.length; i++) {
                    let move = input[i].split(' ');
                    switch (move[0]) {
                        case 'up':
                            z -= +move[1];
                            break;
                        case 'down':
                            z += +move[1];
                            break;
                        case 'forward':
                            x += +move[1];
                            y += z * +move[1];
                            break;
                    }
                }
                task2 = y * x;
                console.log(`Puzzle 2: ${task2}`, '✩');
            } catch (err) {
                console.error(err)
            }

            console.log('\r');
        })
        .catch((error) => console.log(error))
}