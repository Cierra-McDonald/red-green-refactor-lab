const upperCaseFilter = require('./capitalizeAndFilter');

describe('takes an array of strings, capitalizes strings and takes out strings starting with "F" ', () => { 
  it('function returns a filtered and capitalized array', () => { 
    const arrOfStrings = upperCaseFilter(['january', 'february', 'march', 'spring', 'winter', 'fall']);

    expect(arrOfStrings).toEqual(['JANUARY', 'MARCH', 'SPRING', 'WINTER']);

  });
});
