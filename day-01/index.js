function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addPunctuation(punctuation) {
  return function result(string) {
    return string + punctuation;
  };
}

function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function oddEvenish(number) {
  let num = 0;
  String(number).split('').map(number => num += Number(number));
  return num % 2 === 0 ? 'Evenish' : 'Oddish';
}

function fizzBuzz(num) {
  const array = [];
  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      array.push('FizzBuzz');
      // evenly divisible by 3
    } else if (index % 3 === 0) {
      array.push('Fizz');
    } else if (index % 5 === 0) {
      array.push('Buzz');
    } else array.push(index);
  }
  return array;
}

function anagrams(wordOne, wordTwo) {
  const lengthOne = wordOne.length;
  const lengthTwo = wordTwo.length;
  if (lengthOne !== lengthTwo) {
    return 'invalid';
  }

  const arrOne = wordOne
    .split('')
    .sort()
    .join('');
  const arrTwo = wordTwo
    .split('')
    .sort()
    .join('');
  
  if (arrOne === arrTwo) {
    return true;
  } else {
    return false;
  }
}

function multiples(number) {
  const array = [];
  if (number >= 50) return array;
  for (let index = 1; index <= 50; index++) {
    if (index % number === 0) array.push(index);
  }
  return array;
}

function rootDigit(number) {
  const digits = number.toString().split('');
  const numbers = digits.map(d => +d);
  const sum = numbers.reduce((a, b) => a + b);

  return String(sum).split('').length === 1 ? sum : rootDigit(sum);

}

module.exports = { reverseSentence, addPunctuation, titleCase, oddEvenish, fizzBuzz, multiples, rootDigit, anagrams };
