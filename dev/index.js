var xyz = require('xyz-affair');

var bounds = [
  [18.4153975765, 49.8395629367],
  [18.4445268716, 49.8528495864],
];

var tiles = xyz(bounds, 12, 18);

var fs = require('fs');

var file = fs.createWriteStream('tiles.json');
file.write(
  JSON.stringify(
    tiles.map(xyz => {
      return `https://a.tile.openstreetmap.org/${xyz.z}/${xyz.x}/${xyz.y}.png`;
    })
  )
);
file.end();

console.log(tiles.length);
