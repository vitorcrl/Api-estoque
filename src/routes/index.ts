import { Router } from 'express';
import registerItems from './items.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';
import usersItemsRouter from './users.items.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/items', registerItems);
routes.use('/sessions', sessionsRouter);
routes.use('/useritems', usersItemsRouter);

export default routes;
