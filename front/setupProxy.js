const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      target: 'http://13.49.0.0:3010',
      changeOrigin: true,
    })
  );
};