const fs = require('fs');
const readline = require('readline');


const day02 = () => {
    const file = readline.createInterface({
        input: fs.createReadStream('./input.txt'),
        output: process.stdout,
        terminal: false
    });

    const lines = [];

    file.on('line', line => {
        lines.push(line);
    });

    file.on('close', () => {
        let correct = 0;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            const parts = line.split(' ');
            console.log(parts);
            const matches = parts[2].match(new RegExp(parts[1].replace(':', ''), 'g'));
            const countLetter = matches ? matches.length : 0;
            const min = parts[0].split('-')[0];
            const max = parts[0].split('-')[1];

            if (countLetter >= min && countLetter <= max) {
                correct += 1;
            }
        }

        console.log(correct);
    })
}
day02();