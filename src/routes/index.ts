import { Router } from 'express';
import routerEstoque from './router.estoque';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/', routerEstoque);
routes.use('/users', usersRouter);

export default routes;
