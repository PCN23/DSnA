const { Stack } = require('../Stack.js');

describe('stack', () => {
  it('should push item', () => {
    const array = new Stack([]);
    array.push('fox');
    array.push('goose');
    array.push('lizard');
    expect(array.arrayNow).toEqual(['fox', 'goose', 'lizard']);
  });

  it('should pop and return array without last item on list', () => {
    const array = new Stack(['fox', 'goose', 'lizard']);
    array.pop();
    expect(array.arrayNow).toEqual(['fox', 'goose']);
  });
  it('should peek return item in array', () => {
    const peekList = new Stack(['fox', 'goose', 'lizard']);
    expect(peekList.peek()).toEqual('lizard');
  });
});
