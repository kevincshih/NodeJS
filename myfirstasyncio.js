var path = process.argv[2]
var fs = require('fs')
var bufs = undefined
var buf = fs.readFile(path, function doneReading(err, fileContents){
bufs = fileContents.toString()
console.log(bufs.split('\n').length-1)
})
