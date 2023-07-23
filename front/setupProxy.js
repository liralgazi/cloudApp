const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      target: '"http://13.53.141.203:3010',
      changeOrigin: true,
    })
  );
};