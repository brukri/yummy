var path = require("path");

/**
 * GET /food/wine/recommendation?wine=merlot&maxPrice=50&minRating=0.7&number=3
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
  res.setHeader("date", "Tue, 28 Aug 2018 18:18:17 GMT");
  res.setHeader("server", "Mashape/5.0.6");
  res.setHeader("x-ratelimit-requests-limit", "50");
  res.setHeader("x-ratelimit-requests-remaining", "42");
  res.setHeader("x-ratelimit-results-limit", "500");
  res.setHeader("x-ratelimit-results-remaining", "445");
  res.setHeader("x-ratelimit-tinyrequests-limit", "500");
  res.setHeader("x-ratelimit-tinyrequests-remaining", "498");
  res.setHeader("content-length", "936");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAL1U227bRhD9lQFRp0BBUpRIypICI7CMGjWKNK2dNAWCPKzIEbnVXoi9WJUD/3tnSaqV3QYB8hBBELS7Mzsz55w9nyKDlZYSVY31e67QRqsPnyJeR6uiOF/mizhy3AmMVtGtlhvm0cBrNEK7KI5qtJXhneNa0fmPyvGKqwaYqkHwexQHMFhDpYU2L2GDzDu+9YK2mdGSUTTsuWthI1i1g6pFYw59Mt2J0AkvU3ijwLW0YII5BAadN9wdQG+HrMobw5SLocKamT5ZcuVgK9i9NpaCaDBwukG6xYBFJgVaKw4p3Omt6xOs7zqBMdXhlhpSCC2zVEpizb1MNrrmNIXU3rXJFlEMTVN7tgXHlOLKUi5zQIWxMaHPPiL03aBCo72FLVfctukbb2AbWuMuDMUN4UWH2pxU56oSvkYChFc7VBRmJFqmxiGTTjC1o44sE1Ir0Pc02J6LAFtFY/QYUG9Gawkdf3hgKVHVhUMi6btZmZZL2uCSNfjOCNprnevsajKxndaKVV4wk5ImJp3Rta/cTYi0k0EOST6d/TXLp+mfXUO3MCpOp7dEpmqiVZYu53Fk+tWV9spFqzLN4shW2mA4XizPyzgSXO1O6laCBk3Dpj0QXM2hr14jdmHvFa8vfvjtit/czV3RXL6QtJ5ls/KF9EZc9Hec5Zdns2v67vf7NGAYLqDlOAD9M6N2E9lrN5ll2YK2p9P5YpFHj/Go+DwrQn9Hxf/yO7wlEte8gZ9Z6xX7nPQvB8n22qWx6SmNkYMSlHZog2aDpuNBuZug9oGtNiiWTm1HHMETtubp8uvI6if5IlnPuCqecjXLs/P58vj7H9oC2EyyB636BgilZEApGWZPbrFOgqVM6m6yzqbX5R+/vn33/pVjzcVJ98TFCQGLosz/JWCN4YGQvn/SexQCXoc+GVewZqoy4QHf0p/2c7QE8ojp+f+HAw+vnJBuoWFGoRucauBkY7i0A3tHLyGGepYHu9oaz50lMo3eq4E622eyf/jUZE0NwgNal8KNs+SGZAOkjaNrhPAaO6pB0UMZkGxHFkD55AS0e0Tge0sOZB2ZkqRrydZ6ryDrIGU/RyddB9dbwTI/G0eNoTiDK0aaC2PeMX/PG6XVMGp+cnRNLVenAsyLr1ZgoPJLClwU2eln+kyQ0/ypIqfls+hv7ySbkZCk7UFP5Ah6shk1lgQI2xOjmQ9GU54X0eNH0rZ2TFwHl4hWs+zxbxYkPyGBBwAA", "base64"));
  res.end();

  return __filename;
};
