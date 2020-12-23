var proxy = require('express-http-proxy');
var app = require('express')();

app.use("/", (req, res) => {
  // console.log('$req.headers.host-', req.headers.host)
  // console.log('$req.hostname-', req.hostname)
  if(req.hostname === 'l.localhost'){
    return proxy('https://loveapi.ml')(req, res)
  }else if(req.hostname === 'r.localhost'){
      return proxy('https://reverberate.ml')(req, res)
  }
})
app.use('/s1', proxy('http://localhost:8085'));
app.use('/s2', proxy('http://localhost:8086'));
app.use('/s3', proxy('https://reverberate.ml'));
app.use('/loveapi', proxy('https://loveapi.ml'));

const PORT = 880 

app.listen(PORT, () => {
  let greet = 'Welcome to proxy server\n\n'
  let line1 = 'Browse localhost/s1\n'
  let line2 = 'Browse localhost/s2\n'
  let runningInfo = 'Running on port '

  console.log(greet, line1, line2, runningInfo, PORT)
})
