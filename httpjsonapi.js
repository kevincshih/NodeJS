var port = process.argv[2]
var http = require('http')
var url = require('url')
var map = require('through2-map')
var str = require('string-to-stream')
var server = http.createServer(function (req, res) {
    // request handling logic...
    if(req.method=='GET'){
	var u = url.parse(req.url, true)
	//console.log('url' + u.pathname)
	if(u.pathname=='/api/parsetime'){
	var d = new Date(u.query.iso)
	var r = {hour:d.getHours(),minute:d.getMinutes(),second:d.getSeconds()}
	return str(JSON.stringify(r)).pipe(res)
	}
	if(u.pathname=='/api/unixtime'){
	var d = new Date(u.query.iso)
	var r = {unixtime:d.getTime()}
	return str(JSON.stringify(r)).pipe(res)
	}
    return 'No GET request or invalid path.\n'.pipe(res)
    }})
server.listen(port)

