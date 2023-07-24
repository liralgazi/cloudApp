const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      target: 'http://16.171.52.252:3010',
      changeOrigin: true,
    })
  );
};