const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      target: '10.10.11.147:3000',
      changeOrigin: true,
    })
  );
};