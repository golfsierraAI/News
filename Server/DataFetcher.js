const cheerio = require("cheerio");
const fetch = require("node-fetch");

function get(options, callback) {
  var flag = 0;

  const URL = `https://inshorts.com/${options.lang}/read/${options.category}`;
  return fetch(URL)
    .then((response) => response.text())
    .then((body) => {
      const news = [];
      const $ = cheerio.load(body);
      if (options.click) {
        $("#load-more-btn");
      }
      $(".news-card").each((i, element) => {
        const $element = $(element);

        const $title = $element.find("div.news-card-title a.clickable span");
        const title = $title.text();

        const $author = $element.find(
          "div.news-card-title div.news-card-author-time span.author"
        );
        const author = $author.text();

        const $time = $element.find(
          "div.news-card-title div.news-card-author-time span.time"
        );
        const time = $time.text();

        const $date = $element.find("div.news-card-author-time");
        const date = $date.children().last().text();

        const createdAt = `${time} ${date}`;
        const $imgURL = $element.find("div.news-card-image");
        const imgURL = $imgURL.css("background-image");

        const $readMore = $element.find("div.read-more a.source");
        const readMore = $readMore.attr("href");

        const $content = $element.find("div.news-card-content div");
        let content = $content.text();
        content = content.substring(0, content.indexOf("\n"));
        const info = {
          title: title,
          author: author,
          content: content,
          postedAt: createdAt,
          sourceURL: URL,
          imgURL: imgURL,
          readMore: readMore,
        };
        news.push(info);

        if (i + 1 == options.numOfResults) {
          callback(news);
          flag = 1;
        }
      });

      if (!flag) {
        callback(news);
      }
      if (news.length < 1) {
        callback({
          errorText: "No data was returned. Check options object.",
        });
      }
    })
    .catch((err) => {
      callback(err);
    });
}

module.exports.get = get;
