const http = require('http');
const yakbak = require('yakbak');

http.createServer(yakbak('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com', {
  dirname: __dirname + '/spoonacular'
})).listen(3000);
