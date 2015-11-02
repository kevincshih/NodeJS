var path = process.argv[2]
var fs = require('fs')
var buf = fs.readFileSync(path.toString('ascii'))
var bufs = buf.toString('ascii')
var a = bufs.split('\n')
console.log(a.length-1)
