const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const port = process.env.PORT || 8080;
const isDev = process.env.ENV !== 'production' && process.env.ENV !== 'preparing' && process.env.ENV !== 'qa';
const app = next({ dev: isDev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(compression());
  server.use(cookieParser());

  server.get('*', (req, res) => {
    handle(req, res);
  });

  await server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> 🚀 Ready on http://localhost:${port}`);
  });
})();
