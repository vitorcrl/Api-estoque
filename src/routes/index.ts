import { Router } from 'express';
import registerItems from './register.items';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/items', registerItems);
routes.use('/sessions', sessionsRouter);

export default routes;
