import { readFileSync } from 'fs';

const day03 = () => {
  const rows = readFileSync('input.txt', 'utf8').split(/\r?\n/);

  const partOne = () => {
    let position = 0;
    let treeCount = 0;

    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];

      if (row.charAt(position) === '#') {
        treeCount += 1;
      }

      position += 3;
      position = position >= row.length ? position % row.length : position;
    }

    return treeCount;
  };

  const partTwo = () => {
    const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
    let treesPerSlope = 0;
    let treesMultiplied = 1;

    for (let i = 0; i < slopes.length; i++) {
      let [stepGap, rowGap] = slopes[i];
      let position = 0;

      for (let j = 0; j < rows.length; j += rowGap) {
        let row = rows[j];

        if (row.charAt(position) === '#') {
          treesPerSlope += 1;
        }

        position += stepGap;
        position = position >= row.length ? position % row.length : position;

      }

      treesMultiplied = treesMultiplied * treesPerSlope;
      treesPerSlope = 0;
    }

    return treesMultiplied;
  };

  console.log('Part One: ', partOne());
  console.log('Part Two: ', partTwo());
}

day03();