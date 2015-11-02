var port = process.argv[2]
var file = process.argv[3]
var http = require('http')
var fs = require('fs')
    var server = http.createServer(function (req, res) {
      // request handling logic...
	var r = fs.createReadStream(file)
	r.pipe(res)
    })
    server.listen(port)

