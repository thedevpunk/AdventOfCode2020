const fs = require('fs');
const readline = require('readline');

const file = readline.createInterface({
  input: fs.createReadStream('./input.txt'),
  output: process.stdout,
  terminal: false
});

const lines = [];
file.on('line', line => {
  lines.push(line);
});

file.on('close', () => {

  for (let i = 0; i < lines.length; i++) {
    const firstNumber = parseInt(lines[i]);

    for (let j = 0; j < lines.length; j++) {
      const secondNumber = parseInt(lines[j]);

      for (let k = 0; k < lines.length; k++) {
        const thirdNumber = parseInt(lines[k]);
        
        if (i !== j && i !== k && j !== k ) {
          if (firstNumber + secondNumber + thirdNumber === 2020) {
            console.log(firstNumber * secondNumber * thirdNumber);
            return;
          }
        }
      }


    }
  }



})