const axios = require("axios");
axios
  .get("https://www.rareseeds.com/store/")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
