var path = require("path");

/**
 * GET /recipes/findByIngredients?ingredients=parmesan,tomato puree,parsley,pepper&number=5&ranking=1
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
  res.setHeader("date", "Tue, 28 Aug 2018 08:32:22 GMT");
  res.setHeader("server", "Mashape/5.0.6");
  res.setHeader("x-ratelimit-requests-limit", "50");
  res.setHeader("x-ratelimit-requests-remaining", "46");
  res.setHeader("x-ratelimit-results-limit", "500");
  res.setHeader("x-ratelimit-results-remaining", "480");
  res.setHeader("x-ratelimit-tinyrequests-limit", "500");
  res.setHeader("x-ratelimit-tinyrequests-remaining", "500");
  res.setHeader("content-length", "342");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALWTMU/DMBCF/8rJA13SpomTFIWthUrdKkAsiOHquKmpY1u2U6hQ/zspURMxMEQqi2WdT+99705+/SKiIHk8jWlMA+KFl5zkZF4z9EIJWFqEe4EHLTVsra5g1FSUOo4cCYiosDx377w3Lg9DZ7RWyGqJdsJ0FVrOhOGrc5cLW4sxjeLPmEaTd1NeFJ6P5qzSVmrHi5UqLS8EV36ha+VJngSkEu6PFyn23JE8yqanoE2TJY1V2qd5KEsjUXlYo624QzWUvRW8Nnvas1/I05QmcdyTv/CSe9xIDo9Y1kOxW7VrY2cdNr2l3cjp7NfIF3hAj8YIMOg8wofwO3AoK62AWdyAq62oxOBF/NhcO9GsS5Rc8kTTNImzPs+aNzcHS7RMOBjD2uoDVzeMNULyjsOTr7dbXsAc983ZrW3wL2l9/y8gPb19A2fRXOjzAwAA", "base64"));
  res.end();

  return __filename;
};
