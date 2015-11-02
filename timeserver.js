var port = process.argv[2]
var net = require('net')
var strftime = require('strftime')
    var server = net.createServer(function (socket) {
      // socket handling logic
	var d = new Date()
	var s = strftime('%F %H:%M', d) + '\n'
	socket.end(s)
    })
    server.listen(port)

