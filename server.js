var proxy = require('express-http-proxy');
var app = require('express')();

const generateAnchorLink = (url) => `<li><a href="${url}">${url}</li>`;

app.use("/", (req, res, next) => {
  // console.log('ping');
  // console.log('$req.headers.host-', req.headers.host)
  // console.log('$req.hostname-', req.hostname)
  if (req.hostname === 'sr.localhost') {
    return proxy('https://sahilrajput.com')(req, res);
  } else if (req.hostname === 'blog.localhost') {
    return proxy('https://blog.sahilrajput.com/')(req, res);
  }
  next();
});
app.use('/s1', proxy('http://localhost:8085'));
app.use('/s2', proxy('http://localhost:8086'));
app.use('/sr', proxy('https://sahilrajput.com'));

app.get('/', (req, res) => {
  return res.send(`
<ul>
${generateAnchorLink('http://sr.localhost:880')}
${generateAnchorLink('http://blog.localhost:880')}
${generateAnchorLink('http://localhost:880/s1')}
${generateAnchorLink('http://localhost:880/s2')}
${generateAnchorLink('http://localhost:880/sr')}
</ul>
  `);
});

const PORT = 880;

app.listen(PORT, () => {
  console.log(`Visit your proxy serer at: http://localhost:${PORT}`);
});
