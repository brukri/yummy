const http = require('http');
const yakbak = require('yakbak');
const express = require('express');

const app = express();

const spoonacular = yakbak('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com', {
	dirname: __dirname + '/spoonacular'
});


app.use(function (req, res, next) {
  spoonacular(req, res);
}).listen(3200);

