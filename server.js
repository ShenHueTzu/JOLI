const express = require('express');
const next = require('next');

const port = process.env.PORT || 5000;
const isDev = process.env.ENV !== 'production';
const app = next({ dev: isDev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.get('*', (req, res) => {
    handle(req, res);
  });

  await server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> 🚀 Ready on http://localhost:${port}`);
  });
})();
