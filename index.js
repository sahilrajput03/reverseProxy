var proxy = require('express-http-proxy');
var app = require('express')();

app.use('/s1', proxy('http://localhost:8085'));
app.use('/s2', proxy('http://localhost:8086'));

app.listen(880, () => {
  let greet = 'Welcome to proxy servers\n\n'
  let line1 = 'Browse localhost/s1\n'
  let line2 = 'Browse localhost/s2\n'
  let runningInfo = 'Running on port 880'

  console.log(greet, line1, line2, runningInfo)
})
