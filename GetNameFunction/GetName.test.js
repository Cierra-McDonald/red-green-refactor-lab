const getName = require('./GetName');

describe('retrieve name from object function', () => { 
  it('takes in an object and returns the name property', () => { 
    const personObj = getName({ 
      'id': 123,
      'name': 'Cristian',
      'hobby': 'hiking',
      'birthday': '10/24/93'
    });

    expect(personObj).toEqual('Cristian');
  });
});
