var fs = require('fs');

var FILENAME = 'rings.json';

var SPACE = /\s/;

function hasSpace(str) {
  return SPACE.test(str);
}

function fancyCase(str) {
  return str.split(' ').reduce(function(a, s) {
      if(a === '') return s;
      return a + s[0].toUpperCase() + s.slice(1);
    }, '')
}

var renameMap = {
  model: 'sku',
  collection: 'category',
  views: 'images'
}

var data = JSON.parse(fs.readFileSync(FILENAME));

var keys = Object.keys(data);

var newData = [];

for(var k in data) {
  var obj = data[k]
  var newObj = {};
  for(var prop in obj) {
    if(hasSpace(prop)) {
      newObj.details = newObj.details || {};
      newObj.details[fancyCase(prop)] = obj[prop];
      continue;
    }
    switch(prop) {
      case 'model':
      case 'collection':
      case 'images':
        // First image is the 'main' image
        // do something about that
        newObj[renameMap[prop]] = obj[prop];
        break;
      case 'type':
        newObj.details = newObj.details || {};
        newObj.details[prop] = obj[prop];
        break;
      case 'main_view':
      case 'thumb_dim':
        break;
      default:
        newObj[prop] = obj[prop];
    }
  }
  newData.push(newObj);
}

console.log('Processed', newData.length, 'items');

fs.writeFileSync('./rings-mongoified.json', JSON.stringify(newData));
