var fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

//scrape the vegetable on Baker Creek
function scrapeVegs() {
  const searchVeg = "radish";
  const vegLinks = [];
  const url = `https://www.rareseeds.com/catalogsearch/result/?q=${searchVeg}`;
  axios
    .get(url)
    .then((response) => {
      let $ = cheerio.load(response.data);
      // thing = $(".product description product-item-description");

      // console.log($("product description product -item-description").text());
      $("a").each(function (i, e) {
        const link = $(e).attr("href");
        const set = new Set(vegLinks);
        if (
          typeof link !== "undefined" &&
          link.startsWith("https://www.rareseeds.com/store/vegetables") &&
          !link.endsWith("#reviews")
        ) {
          vegLinks.push(link);
          console.log(set);
        }
      });
    })

    .catch(function (e) {
      console.log(e);
    });
}
scrapeVegs();

// let returnVegetables = scrapeBakerCreek();
// function pushToJSONFile(result = scrapeBakerCreek()) {
//   const searchVeg = result[0];
//   dataPromise = result[1];
//   var data = {};
//   data.table = [];
//   for (i = 0; i < 26; i++) {
//     var obj = {
//       sku: i,
//       productName: i,
//       daysToHarvest: i,
//       description: i,
//       image: i,
//     };
//     data.table.push(obj);
//   }
//   fs.writeFile(`${searchVeg}.json`, JSON.stringify(data), function (err) {
//     if (err) throw err;
//   });
// }
// pushToJSONFile();

// function readTomatoes() {
//   tomatoDict = {};
//   var text = fs.readFileSync("tomatoes.data").toString("utf-8");
// }
// readTomatoes();
