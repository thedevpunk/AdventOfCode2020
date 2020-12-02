import fileReader from '../helper/fileReader.js';

const day01 = () => {
  const lines = fileReader('input.txt').map(Number);

  const partOne = () => {
    for (let i = 0; i < lines.length; i++) {
      const firstNumber = lines[i];

      for (let j = 0; j < lines.length; j++) {
        const secondNumber = lines[j];

        if (i !== j) {
          if (firstNumber + secondNumber === 2020) {
            return firstNumber * secondNumber;
          }
        }
      }
    }
  }

  const partTwo = () => {
    for (let i = 0; i < lines.length; i++) {
      const firstNumber = lines[i];

      for (let j = 0; j < lines.length; j++) {
        const secondNumber = lines[j];

        for (let k = 0; k < lines.length; k++) {
          const thirdNumber = lines[k];

          if (i !== j && i !== k && j !== k) {
            if (firstNumber + secondNumber + thirdNumber === 2020) {
              return firstNumber * secondNumber * thirdNumber;
            }
          }
        }
      }
    }
  }

  console.log('Part One:', partOne());
  console.log('Part Two:', partTwo());



}

day01();
