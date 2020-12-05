import { readFileSync } from 'fs';

const day04 = () => {
    const rows = readFileSync('input.txt', 'utf8').split(/\r?\n/);

    const partOne = () => {
        const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

        let passportData = '';
        let validCount = 0;

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            passportData += ' ' + row;

            if (row === '' || i === rows.length - 1) {
                let allRequiredMatched = true;

                for (let j = 0; j < requiredFields.length; j++) {
                    const field = requiredFields[j];

                    const searchPattern = new RegExp("" + field + ":\\S+", "g");
                    if (!passportData.match(searchPattern)) {
                        allRequiredMatched = false;
                    }
                }

                if (allRequiredMatched) {
                    validCount += 1;
                }

                passportData = '';
            }
        }

        return validCount;
    }

    console.log('Part One', partOne());
}

day04();