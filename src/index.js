

const http = require('http');

const PORT = process.env.PORT || 8080;
let currentApp = require('./app');

const server = http.createServer(currentApp).listen(PORT, () => {
  console.log(`Server started on: http://localhost:${PORT}`);
});

if (module.hot) {
  module.hot.accept('./app', () => {
    try {
      server.removeListener('request', currentApp);
      /* eslint-disable-next-line global-require */
      currentApp = require('./app');
      server.on('request', currentApp);
    } catch (err) {
      console.error(err);
    }
  });
  module.hot.accept();
  module.hot.dispose(() => {
    console.log('Server stopped');
    server.close();
  });
}
