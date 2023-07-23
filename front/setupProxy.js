const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      target: 'final-project-LB-142331911.eu-north-1.elb.amazonaws.com:3010',
      changeOrigin: true,
    })
  );
};