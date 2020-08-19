//prerequisite
var http = require('http');
var fs = require('fs');
var url = require('url');

//main page variables
var verticaltagname;
var v;
v = 'A'||'B'||'C';

var horizontaltagname;
var h;
h = 'a'||'b'||'c';

var vhtagname;
var vh;
vh = 'd'||'e'||'f';

var vtaglist; //lists
var htaglist; //lists
var vhintersectionlist; //lists

//list of URLs
var vurl = new URL('/vurl', 'https://airadiolab.com/'); // 예시 URL
var hurl = new URL('/hurl', 'https://airadiolab.com/'); // 예시 URL
var vhurl = new URL('/vurl', 'https://airadiolab.com/'); // 예시 URL

//main page functions

var app = http.createServer(function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url. true).pathname;
  var title = queryData.id;
if(pathname == 'https://www.airaliolab.com'){
  fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
    var template = `
    <!doctype html>
    <html>
    <head>
    <title>AIRADIOLAB - ${title}</title>
    <meta charset = "utf-8">
    </head>
    <body>
      <h1><a href="https://www.airaliolab.com">AIRADIOLAB</a></h1>
      <ul>
        <li><a href="https://www.airaliolab.com/A"> A </a></li>
        <li><a href="https://www.airaliolab.com/B"> B </a></li>
        <li><a href="https://www.airaliolab.com/C"> C </a></li>
      </ul>
      <h2>${title}</h2>
      <p>S{description}</p>
    </body>
    </html>
    `;
    response.writeHead(200);
    reasponse.end(template);
  });
} else {
    response.writehead(404);
    response.end('NOT FOUND');
}
});

app.listen(3000);
