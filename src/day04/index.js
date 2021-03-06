import { readFileSync } from 'fs';

const day04 = () => {
    const passportRaw = readFileSync('input.txt', 'utf8').split(/\r?\n\r?\n/);

    const partOne = () => {
        const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

        let validCount = 0;

        for (let i = 0; i < passportRaw.length; i++) {
            const passport = passportRaw[i].replace(/\r?\n/, ' ');

            let allRequiredMatched = true;

            for (let j = 0; j < requiredFields.length; j++) {
                const field = requiredFields[j];

                const searchPattern = new RegExp("" + field + ":\\S+", "g");
                if (!passport.match(searchPattern)) {
                    allRequiredMatched = false;
                }
            }

            if (allRequiredMatched) {
                validCount += 1;
            }
        }

        return validCount;
    }

    const partTwo = () => {
        const requiredFields = [
            {
                field: 'byr',
                pattern: /byr:(19[2-9][0-9]|200[0-2])/
            },
            {
                field: 'iyr',
                pattern: /iyr:(201[0-9]|2020)/
            },
            {
                field: 'eyr',
                pattern: /eyr:(202[0-9]|2030)/
            },
            {
                field: 'hgt',
                pattern: /hgt:(((1[5-8][0-9])|(19[0-3]))cm|((59)|(6[0-9])|(7[0-6]))in)/
            },
            {
                field: 'hcl',
                pattern: /hcl:(#[0-9a-f]{6})/
            },
            {
                field: 'ecl',
                pattern: /ecl:(amb|blu|brn|gry|grn|hzl|oth)/
            },
            {
                field: 'pid',
                pattern: /pid:(\d{9})(\s|$)/
            }];

        let validCount = 0;

        for (let i = 0; i < passportRaw.length; i++) {
            const passport = passportRaw[i].replace(/\r?\n/, ' ');

            let allRequiredMatched = true;

            for (let j = 0; j < requiredFields.length; j++) {
                const pattern = requiredFields[j].pattern;

                if (!passport.match(pattern)) {
                    allRequiredMatched = false;
                }
            }

            if (allRequiredMatched) {
                validCount += 1;
            }
        }

        return validCount;
    }

    console.log('Part One', partOne());
    console.log('Part Two', partTwo());
}

day04();