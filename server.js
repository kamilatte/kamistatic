const express = require('express');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve public/index.html for all routes except /src/*
  server.get(/^\/(?!src).*/, (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Serve public/index.html for non-/src routes
    return app.serveStatic(req, res, 'public/index.html');
  });

  // Serve static files from the /src route
  server.use('/src', express.static('public/src'));

  const httpServer = createServer(server);

  const PORT = process.env.PORT || 3000;

  httpServer.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
