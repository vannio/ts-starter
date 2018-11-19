const express = require('express');
const app = express();
const request = require('request-promise-native');
const dotenv = require('dotenv');
dotenv.config({});

const giphyKey = process.env.GIPHY_API_KEY;
const giphyUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyKey}`;

app.get('/', (req, res) => {
  request(giphyUrl).then((result) => res.send(result));
});

app.listen(3000, () => {
  console.log("Hi, I'm hogging port 3000");
});

module.exports = app;
