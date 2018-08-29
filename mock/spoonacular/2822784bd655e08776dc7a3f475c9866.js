var path = require("path");

/**
 * GET /food/ingredients/autocomplete?query=appl&number=10&intolerances=egg
 *
 * host: spoonacular-recipe-food-nutrition-v1.p.mashape.com
 * connection: keep-alive

 * accept: application/json, text/plain, * / *
 * x-mashape-host: spoonacular-recipe-food-nutrition-v1.p.mashape.com
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36
 * accept-encoding: gzip, deflate, br
 * accept-language: de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7,fr;q=0.6
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("access-control-allow-headers", "UserId, Hash, Name, Password, Accept, Accept-Language, Content-Language, Content-Type, Origin, X-Requested-With");
  res.setHeader("access-control-allow-methods", "GET, HEAD, POST, OPTIONS, DELETE, PUT");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("allow-control-allow-methods", "GET, HEAD, POST, OPTIONS, DELETE, PUT");
  res.setHeader("allow-control-allow-origin", "*");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("content-type", "application/json");
  res.setHeader("date", "Tue, 28 Aug 2018 18:12:14 GMT");
  res.setHeader("server", "Mashape/5.0.6");
  res.setHeader("x-ratelimit-requests-limit", "50");
  res.setHeader("x-ratelimit-requests-remaining", "43");
  res.setHeader("x-ratelimit-results-limit", "500");
  res.setHeader("x-ratelimit-results-remaining", "465");
  res.setHeader("x-ratelimit-tinyrequests-limit", "500");
  res.setHeader("x-ratelimit-tinyrequests-remaining", "498");
  res.setHeader("content-length", "175");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAH2QSw7DIAxEr4JYhxygV6m6cMBFTvkJkkZVlbuHoqpqBMnS43ke29c3d2CRXziEYJB3nCzoX92PQfO125sSzLJyFrFpZ+NMtV8UtQ1IUhgroKgHCWjMq074qG1gmKepEXFCBEKWwv4QDRGssJDAwDF1J2PI6Sos907OZ09ymAPabxDfbnPA4r1iyfoHKjaA9O5vRoRFFK0PeaX1tgG6L1fPAAIAAA==", "base64"));
  res.end();

  return __filename;
};
