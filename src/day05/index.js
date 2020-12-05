import { readFileSync } from 'fs';

const day05 = () => {
    const rows = readFileSync('input.txt', 'utf8').split(/\r?\n/);

    const partOne = () => {


        let highestId = 0;
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            const seatRowCommands = row.split('').filter((e, i) => i < 7);
            const seatColumnsCommands = row.split('').filter((e, i) => i > 6);

            let seatRow = getPositionInRangeByCommands(0, 127, seatRowCommands);
            let seatColumn = getPositionInRangeByCommands(0, 7, seatColumnsCommands);

            let seatId = seatRow * 8 + seatColumn;

            if (seatId > highestId) {
                highestId = seatId;
            }
        }

        return highestId;
    }

    const getPositionInRangeByCommands = (rangeStart, rangeEnd, commands) => {
        let first = rangeStart;
        let last = rangeEnd;

        for (let j = 0; j < commands.length; j++) {
            const command = commands[j];

            if (command === 'L' || command === 'F') {
                last = last - ((last - first + 1) / 2);
            } else {
                first = first + ((last - first + 1) / 2);
            }
        }

        return first;
    }

    console.log('Part One', partOne());
}

day05();