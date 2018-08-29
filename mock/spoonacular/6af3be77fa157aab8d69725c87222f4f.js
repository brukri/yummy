var path = require("path");

/**
 * GET /recipes/findByIngredients?ingredients=apples,flour,sugar&number=5&ranking=1
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
  res.setHeader("date", "Tue, 28 Aug 2018 08:24:38 GMT");
  res.setHeader("server", "Mashape/5.0.6");
  res.setHeader("x-ratelimit-requests-limit", "50");
  res.setHeader("x-ratelimit-requests-remaining", "47");
  res.setHeader("x-ratelimit-results-limit", "500");
  res.setHeader("x-ratelimit-results-remaining", "485");
  res.setHeader("x-ratelimit-tinyrequests-limit", "500");
  res.setHeader("x-ratelimit-tinyrequests-remaining", "500");
  res.setHeader("content-length", "253");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALWSvW6DMBhFXwV9MwkB47jx1jBlzxZ1cMGlX4t/5B+lVdR3LwQlVFUXpLL6WkfnXvt0AWyAU7ot2SaFgKGTwOHR2k4mLw5DkM5DCqhEOwSvIVjPs8xbY7SoYyfcujYqc7JGKw/DLZ+NtBXJi4+C5Os3294Ix087UMaT6GVz0K2TDUodKhN1AE5SUOj/Snq9Dt+lB16U5CsdxUu2oz+8K9RaKKOTsUDl0Nu59lfkcvKE3twpKSkjk/zembNO9nHY/F4gquc+nPsAV/JyHdg0PyPF729zFC7MH70HLSe8mYQfdvn/CPegJYWfvgGz5D/7mwMAAA==", "base64"));
  res.end();

  return __filename;
};
