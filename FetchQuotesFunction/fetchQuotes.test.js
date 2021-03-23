const fetchAPIQuotes = require('./fetchQuotes');

describe('return a single quote from the Futurama Quote API', () => {
  it('function returns an object containing the name, text, and image from the API', async() => { 
    const futuramaObj = await fetchAPIQuotes();


    expect(futuramaObj).toEqual({ 
      name: 'Bender',
      text: 'Bite my shiny metal ass.', 
      image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png' });

  });

});


