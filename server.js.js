const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');
// const { parse } = require('url');
// const { createReadStream } = require('fs');

// const cmsSitemapGenerator = require('./helpers/sitemap-cms');
const config = require('./config');

const port = parseInt(process.env.PORT, 10) || 3000;
const isDev = process.env.ENV !== 'production' && process.env.ENV !== 'preparing' && process.env.ENV !== 'qa';
const app = next({ dev: isDev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  if (!isDev) {
    server.use((req, res, _next) => {
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

      fetch(`http://pro.ip-api.com/json/${ip}?key=Y6uuwTkrwOiyozZ`)
        .then((_res) => _res.json())
        .then((_res) => {
          if (_res.countryCode === 'CN' && req.headers.host !== 'kdan.cn') {
            res.redirect(`https://www.kdan.cn${req.path}`);
          } else {
            _next();
          }
        })
        .catch(() => {
          _next();
        });
    });
  } else {
    server.use(morgan('common'));
  }

  server.use(compression());
  server.use(cookieParser());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.set('trust proxy', true);

  // server.get('/service-worker.js', (req, res) => {
  //   res.setHeader('content-type', 'text/javascript');
  //   createReadStream('.next/service-worker.js').pipe(res);
  // });

  // server.get('/workbox-*.js', (req, res) => {
  //   const { pathname } = parse(req.path, true);
  //   res.setHeader('content-type', 'text/javascript');
  //   createReadStream(`.next${pathname}`).pipe(res);
  // });

  server.post('/api/request_demo', (req, res) => {
    fetch(`${config.INTERNAL_MEMBER_CENTER}/api/internal/demo_info/record`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(req.body),
    })
      .then((resp) => resp.json())
      .then((result) => {
        res.status(200);
        res.json({ status: 'success', data: result, code: 200 });
      })
      .catch((error) => {
        res.status(400);
        res.json({ status: 'error', message: error.message });
      });
  });

  // const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // server.post('/api/update_sitemap', async (req, res) => {
  //   const { payload, collection, action } = req.body;
  //   let data = payload;

  //   if (action === 'create') {
  //     [data] = payload;
  //   }

  //   await timeout(500);
  //   if (data.id) {
  // eslint-disable-next-line max-len
  //     const resp1 = await fetch(`${config.CMS_SERVER}/items/${collection}?filter[id][_eq]=${data.id}`);
  //     let colInfo = await resp1.json();

  //     if (colInfo.data) {
  //       [colInfo] = colInfo.data;

  //       if (colInfo && colInfo.path) {
  // eslint-disable-next-line max-len
  //         const resp2 = await fetch(`${config.CMS_SERVER}/items/paths?filter[id][_eq]=${colInfo.path}`);
  //         let pathInfo = await resp2.json();
  //         [pathInfo] = pathInfo.data;

  //         if (data.sitemap && pathInfo.path) {
  //           cmsSitemapGenerator('add', data.languages_code, pathInfo.path);
  //         } else if (data.sitemap === false && pathInfo.path) {
  //           cmsSitemapGenerator('remove', data.languages_code, pathInfo.path);
  //         }
  //       }
  //     }
  //   }

  //   res.status(200);
  // });

  server.get('*', (req, res) => {
    handle(req, res);
  });

  await server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> 🚀 Ready on http://localhost:${port}`);
  });
})();
