const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      target: 'http://16.16.24.178:3010',
      changeOrigin: true,
    })
  );
};