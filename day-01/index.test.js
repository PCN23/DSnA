const { reverseSentence, addPunctuation } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
    
    it('should return a string plus punctuation', () => {
      const addExcitement = addPunctuation('!!!');
      expect(addExcitement('Hello World')).toBe('Hello World!!!');
    });

  });
  
});
