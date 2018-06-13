import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => process.stdout.write(`Running on :${port}\n`));

if (module.hot) {
  module.hot.accept('./app');
}
