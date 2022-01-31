// var http = require('http'),
// fs = require('fs');


// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(process.env.PORT);
// });

var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    switch(pathname){
        case '/subpage':
            //top
            fs.readFile('./game.html', null, function (error, data) {
              if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
              } else {
                response.write(data);
              }
              respone.end();
            });
            //bottom
        break;
        default:
            fs.readFile('./index.html', null, function (error, data) {
              if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
              } else {
                response.write(data);
              }
              respone.end();
            });
        break;
    }

}).listen(process.env.PORT);


// fs.readFile('./index.html', null, function (error, data) {
//     if (error) {
//         response.writeHead(404);
//         respone.write('Whoops! File not found!');
//     } else {
//         response.write(data);
//     }
//     response.end();
// });