var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

// Зауважте, ви можете застосувати .toString() передавши 'utf8' у якості
// другого аргументу readFileSync, тоді ви отримаєте рядок (String)!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
