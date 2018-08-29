var path = require("path");

/**
 * GET /food/wine/pairing?food=steak&maxPrice=50
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
  res.setHeader("date", "Tue, 28 Aug 2018 18:13:19 GMT");
  res.setHeader("server", "Mashape/5.0.6");
  res.setHeader("x-ratelimit-requests-limit", "50");
  res.setHeader("x-ratelimit-requests-remaining", "43");
  res.setHeader("x-ratelimit-results-limit", "500");
  res.setHeader("x-ratelimit-results-remaining", "465");
  res.setHeader("x-ratelimit-tinyrequests-limit", "500");
  res.setHeader("x-ratelimit-tinyrequests-remaining", "498");
  res.setHeader("content-length", "570");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAK2SW2/UMBCF/8rIQvQlyWazlMtKCLV9WK2gCLEFHlAfJs5sYurYkT3p9qL+d8bZ3kA88mZbc87M+Ty3akATqPlhHEW1/Kl6CtazypTGmoIjhojjpWmdd/I4GOcZnDdBnWeT1Lj2jK5YLdXppMzg5EG4eRBmgK6BL5P2s2gBA0EbCBl0542mCFsfYMOEFwUcbZmkxNoMaqLtpJUJYScjTkoEbTFGo0H7vjYO2XhXwIocBZFdZ2AJ5QwxGUZoPezIWjHgDqxpOwbp1lNjxj6vfWNoahAziKPuACM8xdxX7oPtOmMJtshsnsw1OuhkRJvmqr2drJ6c/qToEo0CzjoSOC3VYYwdHDln6CDCd3I8BoQTPzq+/gdGeAl7xn+XTsEQDsGPEm0rh8gYIAgY10Ik6qPkvkgTtt430CPrroC14PeRI2CdhIsKGm8tBskv+WrPbKlInx58M2o+TappSW6VadTy1et3i6rMFBupk///j4mkaUNRBzOkrxXvqpzPIYdV4ntKDVr45CXaMaFgXoW0IidhhLXjAwtpl8WoH0hGM/u9DbJl4vNiURWl3E0vw34LVp465iEuZ7M4eO9QjwKgkL2a3adep8o424fNF/PqqlrMi19DKy54KQvX0teJs1rOC6Gxhz7FuH+J2gfpXRZvDjNljbt41nS32xXY441sRer5iDCfEMb8Hkv+gC5/RDdrhtlxWR6v334826w+MLbvnyXIq1Ldnd/9BoWMBefeAwAA", "base64"));
  res.end();

  return __filename;
};
