var path = require("path");

/**
 * GET /recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg,+gluten&number=10&offset=0&query=burger&type=main+course
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
  res.setHeader("date", "Tue, 28 Aug 2018 18:20:20 GMT");
  res.setHeader("server", "Mashape/5.0.6");
  res.setHeader("x-ratelimit-requests-limit", "50");
  res.setHeader("x-ratelimit-requests-remaining", "41");
  res.setHeader("x-ratelimit-results-limit", "500");
  res.setHeader("x-ratelimit-results-remaining", "444");
  res.setHeader("x-ratelimit-tinyrequests-limit", "500");
  res.setHeader("x-ratelimit-tinyrequests-remaining", "498");
  res.setHeader("content-length", "459");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKWUXW+bMBSG/wryNW4gAUK57KRJlRapLd3VlAuHHIhXY7v+6DZV+e87BAKdRNdWlbgIKOd538cH8UwMWC+cJcWPZ8L3pEjzy/UyCYnjTgApyB3sg28gHRdhULbMHvD+y4FXDxpYwOQ+2HAhwAVX3jRgLAmRyPZ/ruWGS+8AwXkUEgvmicsG79Yh4S1rBjTt0ZQOaHpGU0TTHk0HNO2rXfzUDRkg343omn+GtD2Gvfg6y1ZRPInferAKVQEs/Mcu+8cumeweu3lanebpbgjuQ+YU3vr72DONsjR/saBxGaWXtVC/wAQl4JJer5ykr1Qej2xE0Q41Hdspeq79ByZHkTjPlvlqEikrZnbKKN8cgq+Mm+Be1X7QeNMimyxecGjHoR1naEL70DmF946N/bN4HSXxzCJuPZeKBTe+1Q9cvnsR8XJyqM7n+XhiUd2zxhejz57T+MDk9rgNyY5ZnOWYeXBO22KxsFopySovmLmoVLswUHEN112IXWCcqmsLjhT44kvf7nA5RYy/nXJM3J2/JmimjarAWpS75y1s8OEyz0MCvzU3nX2crtIswiu5jLv12RIBKF8zYeH4F5X500+aBAAA", "base64"));
  res.end();

  return __filename;
};
