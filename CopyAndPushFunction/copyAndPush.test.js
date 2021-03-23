const copyAndPush = require('./copyAndPush');

describe('new item is added to array without mutation function', () => { 
  it('function returns a new array with oringal items and new pushed items to the end', () => { 
    const fruitArr = copyAndPush(
      ['orange', 'apple', 'pear', 'grapes'],
      'cherry');

    expect(fruitArr).toEqual(['orange', 'apple', 'pear', 'grapes', 'cherry']);
  });

  
});

describe('new item is added to array without mutation function', () => { 
  it('function returns a new array with oringal items and new pushed items to the end', () => { 
    const fruitArr = ['orange', 'apple', 'pear', 'grapes'];
    const newArr = copyAndPush(fruitArr, 'cherry');
  
    expect(fruitArr).toEqual(['orange', 'apple', 'pear', 'grapes']);
    expect(newArr).toEqual(['orange', 'apple', 'pear', 'grapes', 'cherry']);
  });
  
});
