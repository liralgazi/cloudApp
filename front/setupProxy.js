const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      target: 'http://cloud-project-lb-1993630990.eu-north-1.elb.amazonaws.com::3010',
      changeOrigin: true,
    })
  );
};