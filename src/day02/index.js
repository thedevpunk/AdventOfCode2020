import fileReader from '../helper/fileReader.js';

const day02 = () => {
    const lines = fileReader('input.txt');

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

    console.log('Part One:', partOne());
    console.log('Part Two:', partTwo());
}
day02();