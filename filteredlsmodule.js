var mymodule = require('./makeitmodular.js')
var path = process.argv[2]
var ext = process.argv[3]
var fs = require('fs')

function callback(err, list){
for (i = 0; i < list.length; i++){
console.log(list[i])
}
}

mymodule(path, ext, callback)
