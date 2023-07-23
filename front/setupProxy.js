const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      target: 'http://final-project-LB-142331911.eu-north-1.elb.amazonaws.com',
      changeOrigin: true,
    })
  );
};