function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addPunctuation(punctuation) {
  return function result(string) {
    return string + punctuation
  }
}

function titleCase(sentence) {
  console.log(sentence);
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

module.exports = { reverseSentence, addPunctuation, titleCase, oddEvenish };
