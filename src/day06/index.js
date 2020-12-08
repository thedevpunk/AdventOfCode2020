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

    console.log('Part One:', partOne());

}

day06();
