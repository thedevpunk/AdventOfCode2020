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

      if (i !== j) {
        if (firstNumber + secondNumber === 2020) {
          console.log(firstNumber * secondNumber);
          return;
        }
      }

    }
  }



})