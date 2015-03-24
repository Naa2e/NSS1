var output = ""

output += "<div>";

for (var i = 0; i <100; i++) {
	if (i%3===0) {output += "fizz + <br>";} 
	if (i%5===0) {output += "buzz + <br>";} 	
}

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send(output)
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

