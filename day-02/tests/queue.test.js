const { Queue } = require('../Queue.js');

describe('queue', () => {
  it('should add an item on queue.enqueue', () => {
    const queue = new Queue();
    queue.enqueue('hello');
    expect(queue.hasNext()).toEqual(true);
  });
});
