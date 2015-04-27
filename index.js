var express     = require("express");

var PORT = Number( process.env.PORT || 4000 );
var app  = express();

function send(name) {
  return function(req, res) {
    res.sendFile(__dirname + "/public/" + name);
  };
}

app.get("/",       send("index.html"));
app.get("/app.js", send("app.js"));

app.listen(PORT, console.log.bind(null, "PORT: " + PORT));
