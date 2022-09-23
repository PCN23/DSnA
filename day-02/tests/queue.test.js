const { Queue } = require('../Queue.js');

describe('queue', () => {
  it('should add an item on queue.enqueue', () => {
    const array = new Queue([]);
    array.enqueue('fox');
    array.enqueue('goose');
    array.enqueue('lizard');
    expect(array.arrayNow).toEqual(['fox', 'goose', 'lizard']);
  });
    
  it('should remove an item from front of list', () => {
    const array = new Queue(['fox', 'goose', 'lizard']);
    array.dequeue();
    expect(array.arrayNow).toEqual(['goose', 'lizard']);
  });

  it('should return true or false', () => {
    const exits = new Queue(['goose', 'lizard']);
    const exitsNot = new Queue([]);
    expect(exits.hasNext()).toEqual(true);
    expect(exitsNot.hasNext()).toEqual(false);
  });
});
