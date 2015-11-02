
var bl = require('bl')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]
var urls = [url1, url2, url3]


var outs = ['', '', '']

var http = require('http')

var count = 0

for (i = 0; i<3; i++){
responseCount(i, urls[i])
}

function responseCount(i, url){
http.get(url, function(response) {
response.setEncoding('utf8')
var out = ''
var index = i;
response.on("data", function(data){out += data})
response.on("end", function(end){
outs[index] = out; //console.log(index + outs[index]);
count++;
if(count >= 3){ //console.log("done");
outs.forEach(function(o){console.log(o)})
}})
})
}

//outs.forEach(function(out){console.log(out)})
