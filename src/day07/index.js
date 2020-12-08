import { readFileSync } from 'fs';

const day07 = () => {
    const rules = readFileSync('input.txt', 'utf8').split(/\r?\n/);

    console.log(rules);

    const partOne = () => {
        const pattern = /(\w+ \w+) bags contain \d? (\w+ \w+) (bags|bag)((, \d? (\w+ \w+)) (bags|bag).|.)/;
        // TODO: implement "contain no other bag"

        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i];
            
            const matches = rule.match(pattern);
            console.log(matches[1]);
            // console.log(matches.groups[2]);
            // console.log(matches.groups[6]);
            // console.log(matches.groups[0]);
        }

    }

    const partTwo = () => {

    }

    console.log('Part One', partOne());
    console.log('Part Two', partTwo());
}

day07();