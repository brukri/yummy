var path = require("path");

/**
 * OPTIONS /recipes/findByIngredients?ingredients=cream,tomato,spaghetti&number=5&ranking=1
 *
 * host: spoonacular-recipe-food-nutrition-v1.p.mashape.com
 * connection: keep-alive
 * access-control-request-method: GET
 * origin: http://localhost:4200
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36
 * access-control-request-headers: x-mashape-host,x-mashape-key
 * accept: * / *
 * accept-encoding: gzip, deflate, br
 * accept-language: de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7,fr;q=0.6
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "x-mashape-host, x-mashape-key, x-mashape-authorization, x-requested-with");
  res.setHeader("access-control-allow-methods", "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS");
  res.setHeader("access-control-allow-origin", "http://localhost:4200");
  res.setHeader("access-control-expose-headers", "x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, access-control-allow-origin, accept-ranges, age, allow, cache-control, connection, content-encoding, content-language, content-length, content-location, content-md5, content-disposition, content-range, content-type, date, etag, expires, last-modified, link, location, p3p, pragma, proxy-authenticate, refresh, retry-after, server, set-cookie, status, strict-transport-security, trailer, transfer-encoding, upgrade, vary, via, warning, www-authenticate, x-frame-options, public-key-pins, x-xss-protection, content-security-policy, x-content-security-policy, x-webkit-csp, x-content-type-options, x-powered-by, x-ua-compatible, access-control-allow-credentials, access-control-allow-headers, access-control-allow-methods");
  res.setHeader("content-type", "text/plain");
  res.setHeader("date", "Tue, 28 Aug 2018 11:11:39 GMT");
  res.setHeader("server", "Mashape/5.0.6");
  res.setHeader("content-length", "0");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
