const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      target: '13.53.141.203:3000',
      changeOrigin: true,
    })
  );
};