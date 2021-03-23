const fetch = require('node-fetch');


const fetchAPIQuotes = async() => { 

  const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
  const body = await res.json();

  const oneQuote =  body.map((quote) => {
    return { 'name': quote.character, 'text': quote.quote, 'image': quote.image };
  });
  
  return oneQuote[0];
 
};

module.exports = fetchAPIQuotes;
