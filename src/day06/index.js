import { readFileSync } from 'fs';

const day06 = () => {
    const groups = readFileSync('input.txt', 'utf8').split(/\r?\n\r?\n/);

    const partOne = () => {
        let yesCounter = 0;

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i].split(/\r?\n/).join('').split('');

            const filtered = group.filter((elem, idx, array) => array.indexOf(elem) === idx);

            yesCounter += filtered.length;
        }

        return yesCounter;
    }

    const partTwo = () => {
        let yesCounter = 0;

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i].split(/\r?\n/);

            const groupMembers = group.length;

            const groupYes = group.join('').split('').sort();
            const filtered = groupYes.filter((elem, idx, array) => array.indexOf(elem) === idx);

            let count = 0;

            for (let j = 0; j < filtered.length; j++) {
                const letter = filtered[j];

                count = groupYes.filter(e => e === letter).length
                
                if (count === groupMembers) {
                    yesCounter++;
                }
                count = 0;
            }
        }
        return yesCounter;
    }

    console.log('Part One:', partOne());
    console.log('Part Two:', partTwo());
}

day06();
