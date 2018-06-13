import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('Express');
});
// Uncomment this after `npm start`
// app.get('/test', (req, res) => {
//   res.send('Added later');
// });

export default app;
