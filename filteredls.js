var path = process.argv[2]
var ext = process.argv[3]
var fs = require('fs')
var bufs = undefined
var buf = fs.readdir(path, function (err, list){
for (i = 0; i < list.length; i++){
str = list[i]
if (str.substring(str.length-ext.length-1) == '.'+ext){
console.log(str)
}
}
})
