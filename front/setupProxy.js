const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      target: 'http://13.51.234.120:3010',
      changeOrigin: true,
    })
  );
};