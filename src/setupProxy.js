// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/rss',
//     createProxyMiddleware({
//       target: 'https://shuffle-be.onrender.com/rss',
//       changeOrigin: true,
//     })
//   );
// };

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/rss',
    createProxyMiddleware({
      target: 'https://shuffle-be.onrender.com',
      changeOrigin: true,
      pathRewrite: {
        '^/rss': '/rss'
      }
    })
  );
};