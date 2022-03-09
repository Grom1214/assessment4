const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A faithful friend is a strong defense.", "A good time to finish up old tasks.", "A hunch is creativity trying to tell you something.", "A light heart carries you through all the hard times.", "Advice, when most needed, is least heeded."];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  
  
  res.status(200).send(randomFortune);
});
  



app.get("/api/quote", (req, res) => {
  const quotes = ["never stop to think -someone dumb",  "great power comes great resposibility -uncle ben", "shoot again -dan gabble",];

  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  
  
  res.status(200).send(randomQuote);
});

app.post('/api/quote', (req, res) => {
  const {quotes} = req.body
  quotes.push(req.body.quote)
  res.status(200).send(quotes)
})

app.post('/api/SH', (req, res) => {
  const {SH} = req.body
  SH.push(req.body.SH)
  res.status(200).send(SH)
})

app.listen(4000, () => console.log("Server running on 4000"));