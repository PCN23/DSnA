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
  return sentence
    .split(' ')
    .map((word) => word.split('').toUpperCase().join(''))
    .join(' ');

}

module.exports = { reverseSentence, addPunctuation, titleCase };
