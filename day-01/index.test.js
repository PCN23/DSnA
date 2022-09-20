const { reverseSentence, addPunctuation, titleCase, oddEvenish, fizzBuzz, multiples, rootDigit } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
    
    it('should return a string plus punctuation', () => {
      const addExcitement = addPunctuation('!!!');
      expect(addExcitement('Hello World')).toBe('Hello World!!!');
    });

    it('should capitalize first letting in word', () => {
      expect(titleCase('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });

    it('should return oddish or evenish number', () => {
      expect(oddEvenish('121')).toEqual('Evenish');
      expect(oddEvenish('41')).toEqual('Oddish');
    });

    it('fizzbuzz function working', () => {
      const array = [
        1, 2, 'Fizz', 4, 'Buzz',
        'Fizz', 7, 8, 'Fizz', 'Buzz',
        11, 'Fizz', 13, 14, 'FizzBuzz',
        16
      ];
      expect(fizzBuzz('16')).toEqual(array);
    });

    it('numbers from 1 to 50 that are multiples', () => {
      expect(multiples(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    });

    it('should return a sum of single digit numbers', () => {
      expect(rootDigit('123')).toEqual(6);
    });

  });
  
});
