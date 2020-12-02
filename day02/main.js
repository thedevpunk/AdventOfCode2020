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
        console.log('Part One:', partOne());
        console.log('Part Two:', partTwo());
    })

    const partTwo = () => {
        let valid = 0;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            const parts = line.split(' ');
            const positionOne = parts[0].split('-')[0] - 1;
            const positionTwo = parts[0].split('-')[1] - 1;
            const letterToMatch = parts[1].replace(':', '');
            const stringToCheck = parts[2];

            if ((stringToCheck.charAt(positionOne) === letterToMatch &&
                stringToCheck.charAt(positionTwo) !== letterToMatch) ||
                (stringToCheck.charAt(positionOne) !== letterToMatch &&
                stringToCheck.charAt(positionTwo) === letterToMatch)) {
                valid += 1;
            }
        }

        return valid;
    }

    const partOne = () => {
        let valid = 0;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            const parts = line.split(' ');
            const matches = parts[2].match(new RegExp(parts[1].replace(':', ''), 'g'));
            const countLetter = matches ? matches.length : 0;
            const min = parts[0].split('-')[0];
            const max = parts[0].split('-')[1];

            if (countLetter >= min && countLetter <= max) {
                valid += 1;
            }
        }

        return valid;
    }
}
day02();