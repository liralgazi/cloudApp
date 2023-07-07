const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      target: 'http://10.10.8.32:3010',
      changeOrigin: true,
    })
  );
};