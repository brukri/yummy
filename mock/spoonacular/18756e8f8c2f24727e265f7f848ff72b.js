var path = require("path");

/**
 * GET /recipes/findByIngredients?ingredients=cream,chicken,pineapple,curry,rice&number=5&ranking=1
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
  res.setHeader("date", "Tue, 28 Aug 2018 12:25:08 GMT");
  res.setHeader("server", "Mashape/5.0.6");
  res.setHeader("x-ratelimit-requests-limit", "50");
  res.setHeader("x-ratelimit-requests-remaining", "43");
  res.setHeader("x-ratelimit-results-limit", "500");
  res.setHeader("x-ratelimit-results-remaining", "465");
  res.setHeader("x-ratelimit-tinyrequests-limit", "500");
  res.setHeader("x-ratelimit-tinyrequests-remaining", "500");
  res.setHeader("content-length", "332");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALXTTU+DQBAG4L+y2YsXLF+lUG6KJu3BaJp6Mh4mMIEVukt2hygx/nfBTVsOesDobb/yTp7M7NM7FwVP4yCJAs/hJKhBnvJ9BYLtsGBZp3XPdsIoIsUdLg5Qjg8qotakrmtapSTkXQN6kauDqzEXLW7HV8a1qZehH7wFob94actjwr5vxxR70hkstrLUWAiUlKlOEk+XDj8I893N2uGNqNHwdBXGH44F+H4YJ8kZcCVLbODCsKwSeY2S7UVdA7sDAw3Mddjw/3MER0UUeV6yOituwfRsg9BQJVCzTKu8bhWx645o3FvbXI6t8tccP5j0ZRWcTEm0jKPJaD02NNQiZBt4BSFADoveEOS1mQux0X8OCU8Q74RY+6E3QdxLZA9DI47TBbIYPkmO7EZIiXo25Cv+d5DwZ8jE8fwJhFoBLekDAAA=", "base64"));
  res.end();

  return __filename;
};
