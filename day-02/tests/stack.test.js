const { stack, Stack } = require('../Stack.js');

describe('stack', () => {
  it('should push item', () => {
    const array = new Stack([]);
    array.push('fox');
    array.push('goose');
    array.push('lizard');
    expect(array.arrayNow).toEqual(['fox', 'goose', 'lizard']);
  });
});
