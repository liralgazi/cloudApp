const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/books',
    createProxyMiddleware({
      //target: 'https://http://cloud-project-LB-1993630990.eu-north-1.elb.amazonaws.com:3010',
      target: "13.53.190.107:3010",
      changeOrigin: true,
    })
  );
};