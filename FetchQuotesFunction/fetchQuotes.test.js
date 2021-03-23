const fetchAPIQuotes = require('./fetchQuotes');

describe('return a single quote from the Futurama Quote API', () => {
  it('function returns an object containing the name, text, and image from the API', async() => { 
    const futuramaObj = await fetchAPIQuotes();


    expect(futuramaObj).toEqual({ 
      name: expect.any(String),
      text: expect.any(String), 
      image: expect.any(String)
    });

  });

});


