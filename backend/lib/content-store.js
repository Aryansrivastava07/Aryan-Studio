const data = require("../db/data");

function readContent() {
  return {
    home: data.home,
    portfolio: data.portfolio,
    services: data.services,
    contact: data.contact,
    images: data.externalImages,
  };
}


function publicPage(pageName) {
  const content = readContent();
  return content[pageName];
}

module.exports = {
  readContent,
  publicPage,
};
