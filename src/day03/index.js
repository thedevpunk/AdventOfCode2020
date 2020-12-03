import { readFileSync } from 'fs';

const day03 = () => {
  const rows = readFileSync('input.txt', 'utf8').split('\n');

  const partOne = () => {
    let position = 0;
    let treeCount = 0;

    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];

      while (row.length <= position) {
        row += row;
      }

      if (row.charAt(position) === '#') {
        treeCount += 1;
      }

      position += 3;
    }

    return treeCount;
  }

  console.log('Part One: ', partOne());
}

day03();