var path = require("path");

/**
 * GET /recipes/findByIngredients?ingredients=cream,tomato&number=5&ranking=1
 *
 * host: spoonacular-recipe-food-nutrition-v1.p.mashape.com
 * connection: keep-alive

 * accept: application/json, text/plain, * / *
 * origin: http://localhost:4200
 * x-mashape-host: spoonacular-recipe-food-nutrition-v1.p.mashape.com
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36
 * referer: http://localhost:4200/
 * accept-encoding: gzip, deflate, br
 * accept-language: de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7,fr;q=0.6
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "UserId, Hash, Name, Password, Accept, Accept-Language, Content-Language, Content-Type, Origin, X-Requested-With");
  res.setHeader("access-control-allow-methods", "GET, HEAD, POST, OPTIONS, DELETE, PUT");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, access-control-allow-origin, accept-ranges, age, allow, cache-control, connection, content-encoding, content-language, content-length, content-location, content-md5, content-disposition, content-range, content-type, date, etag, expires, last-modified, link, location, p3p, pragma, proxy-authenticate, refresh, retry-after, server, set-cookie, status, strict-transport-security, trailer, transfer-encoding, upgrade, vary, via, warning, www-authenticate, x-frame-options, public-key-pins, x-xss-protection, content-security-policy, x-content-security-policy, x-webkit-csp, x-content-type-options, x-powered-by, x-ua-compatible, X-RateLimit-tinyrequests-Limit, X-RateLimit-tinyrequests-Remaining, X-RateLimit-tinyrequests-Reset, X-RateLimit-requests-Limit, X-RateLimit-requests-Remaining, X-RateLimit-requests-Reset, X-RateLimit-results-Limit, X-RateLimit-results-Remaining, X-RateLimit-results-Reset, x-ratelimit-tinyrequests-limit, x-ratelimit-results-remaining, x-ratelimit-requests-remaining, access-control-allow-credentials, access-control-allow-headers, x-ratelimit-tinyrequests-remaining, x-ratelimit-results-limit, access-control-allow-methods, allow-control-allow-methods, allow-control-allow-origin, x-ratelimit-requests-limit");
  res.setHeader("allow-control-allow-methods", "GET, HEAD, POST, OPTIONS, DELETE, PUT");
  res.setHeader("allow-control-allow-origin", "*");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("content-type", "application/json");
  res.setHeader("date", "Wed, 29 Aug 2018 15:29:20 GMT");
  res.setHeader("server", "Mashape/5.0.6");
  res.setHeader("x-ratelimit-requests-limit", "50");
  res.setHeader("x-ratelimit-requests-remaining", "49");
  res.setHeader("x-ratelimit-results-limit", "500");
  res.setHeader("x-ratelimit-results-remaining", "495");
  res.setHeader("x-ratelimit-tinyrequests-limit", "500");
  res.setHeader("x-ratelimit-tinyrequests-remaining", "500");
  res.setHeader("content-length", "320");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAL2SwU7CMBiAX6XpxctgrIPO7SaChohKlHDQeGi6P/BD1861SyTGiw/kQ+iLOTJxHrwsEW9N++fr96W9f6aY0iToHYdR5FGHTgFN6AikSEE7MjeZcIYM0T6WQD2KmVjuBlbO5TbxfZsbo4UslSi60mR+ARJzmOymrF9TO2HAnlgYdNf5ck+Yb/Mdpd4pLaQTvSwgxerKU1NqRxPm0QztbyeBRxVuwFar/otX+3POWdRr/KeCXFYBClDDkf2q6AyFRUVuTZm3Lan5f13CvktYMAj3LYxHPI6blguUG9RH5LxApSAlV0KujG1bUFMPV9Br9OM+543+YjxdjMfzk4/X9zdyB9ZtyY3QckVG2PoZavY/RMTVaw9+/KdrDWRmHDkTa3SCzIR1oq18zTyk/MMnkJXsgs4DAAA=", "base64"));
  res.end();

  return __filename;
};
