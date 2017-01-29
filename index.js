var GrowingFile = require('growing-file');

var file = GrowingFile.open('server.log');
file.on('data', function (chunk) {
    console.log(chunk)
});