const jimp = require("jimp");

jimp.read("image.jpeg").then((city) => {
  return city.resize(300, 200).write("image-modified.jpeg");
});
