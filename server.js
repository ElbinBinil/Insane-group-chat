const express = require('express');

const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res) => {
  res.send({
    quote: getRandomElement(quotes)
  });
});

app.post('/api/quotes', (req, res) => {
    const newQuote = {
      quote: req.query.quote,
      person: req.query.person
    };
    if (newQuote.quote && newQuote.person) {
      quotes.push(newQuote);
      res.send({ quote: newQuote });
    } else {
      res.status(400).send('123213');
    }
  });


  app.post('/api/quotes', (req,res,next) =>{
      const newQuote = {
          quote: req.body.quote,
          person :req.body.person
      }
      if(newQuote.quote && newQuote.person){
          quotes.push(newQuote);

         res.send({ quote: newQuote });
      }else{
          res.status(400).send('Write a valid one')
      }
  })


app.listen(PORT, ()=>{
    console.log(`The server is running on the Port: ${PORT}`)
})