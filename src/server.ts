import 'reflect-metadata';
import express from 'express';
import bodyparser from 'body-parser';

import usersRouter from './routes/users.routes';

import routes from './routes/index';

import './database';
import registerItems from './routes/items.routes';
import sessionsRouter from './routes/sessions.routes';
import userItemsRouter from './routes/users.items.routes';

const app = express();
app.use(express.json());

app.use(bodyparser.json());
app.use(routes);

app.get('/', routes);
app.post('/users', usersRouter);
app.post('/items', registerItems);
app.post('/sessions', sessionsRouter);
app.get('/useritems', userItemsRouter);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333! Ctrl+C to stop');
});
