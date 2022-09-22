const { NewArray } = require('../NewArray.js');

describe('reverse array', () => {    
  it('reverse the array', () => {
    const item = new NewArray([12, 3, 5, 7]);
    item.reverse();
    expect(item.arrayNow).toEqual([7, 5, 3, 12]);
  });
});
