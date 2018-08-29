var path = require("path");

/**
 * GET /recipes/findByIngredients?ingredients=cream&number=5&ranking=1
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
  res.setHeader("date", "Tue, 28 Aug 2018 12:14:07 GMT");
  res.setHeader("server", "Mashape/5.0.6");
  res.setHeader("x-ratelimit-requests-limit", "50");
  res.setHeader("x-ratelimit-requests-remaining", "44");
  res.setHeader("x-ratelimit-results-limit", "500");
  res.setHeader("x-ratelimit-results-remaining", "470");
  res.setHeader("x-ratelimit-tinyrequests-limit", "500");
  res.setHeader("x-ratelimit-tinyrequests-remaining", "500");
  res.setHeader("content-length", "283");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALWSsU7DMBCGX8XyHJo4btM4YysQ2ZBAYkAMJj6lR+3Esh2Jgnh3ZKVRGGCoqqy+03f/d+eXL4qKVkLwQuQJDRg00IpuSN21DhRCF8idA/gER3bomwGDpwlFI9vYdwjB+ipNve37TjaDlm7V9CZ10KCFOnb5dITfcJZ/5Jyt3m07EZ5ONlLGl8GDmqfu+6ELtGIJNej/qWg8gqcVZ2L7nUwixbrcziL3vQEjFZC9A2muUIjY5RRYMQmwLMv5+tcpdlo2xzdw7kTqIDXK7uzy2Ct5qceZvpxIOXmUm4JnbNa4bVsN3pMHjLcYfLg0+ghcLnk2JxeFKP/4Qs8HtBbUuP7L40fqkvFffwBCNGpPzAMAAA==", "base64"));
  res.end();

  return __filename;
};
