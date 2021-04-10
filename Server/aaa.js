const inshorts = require("inshorts-api");
var express = require("express");
var app = express();
var bodyParser = require("b");
var options = {
  lang: "en",
  category: "national",
  numOfResults: 100,
};
var res;
inshorts.get(options, function (result) {
  res = result;
});
