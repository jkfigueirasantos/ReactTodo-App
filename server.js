var express = require('express');

var app = express();

// > if the server provides custom enviroment port use it, else use 3000 (local dev)
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Server running in the port ' + PORT);
});
