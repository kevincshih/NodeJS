module.exports = function (dn, ex, callback) {
var path = dn
var ext = ex
var fs = require('fs')
var fexp = new RegExp("\\." + ext + "$")
var buf = fs.readdir(path, function(err, list){
if (err) {return callback(err, null)}
var fl = list.filter(function(line) { return line.match(fexp) })
return callback(err, fl)
})
}
