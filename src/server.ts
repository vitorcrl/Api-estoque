import express, { request, response, Router } from 'express';
import routerEstoque from './routes/router.estoque';

const app = express();
app.get('/', routerEstoque);
app.post('/estoque', routerEstoque);
app.put('/putt', routerEstoque);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
