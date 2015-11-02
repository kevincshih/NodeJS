var bl = require('bl')
var url = process.argv[2]
var http = require('http')
http.get(url, function(response) {
response.setEncoding('utf8')
var out = ''
response.on("data", function(data){out += data})
response.on("end", function(end){console.log(out.length); console.log(out)})
})
