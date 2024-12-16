# Readme

This project demonstrates reverse proxy with the help of `express-http-proxy` (npm library).
- Github: https://github.com/villadora/express-http-proxy
- NPM: https://www.npmjs.com/package/express-http-proxy

You can start this project by:

```bash
# run server1
npm run s1

# run server2 (in separate terminal)
npm run s2

# start proxy server (in separate terminal)
npm start
# and visit: http://localhost:880

# in another terminal run ngrok  (in separate terminal)
./run_ngrok_from_880.sh
# Run the tunnel url give by `ngrok`
```
