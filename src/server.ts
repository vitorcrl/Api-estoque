import express from 'express';
import routerEstoque from './routes/router.estoque';
import usersRouter from './routes/users.routes';

import routes from './routes/index';

import './database';
import registerItems from './routes/register.items';

const app = express();
app.use(express.json());
app.use(routes);

app.get('/', routes);
app.post('/users', usersRouter);
app.post('/items', registerItems);
app.put('/put', routerEstoque);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333! Ctrl+C to stop');
});
