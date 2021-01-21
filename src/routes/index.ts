import { Router } from 'express';
import registerItems from './register.items';
import routerEstoque from './router.estoque';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/', routerEstoque);
routes.use('/users', usersRouter);
routes.use('/items', registerItems);

export default routes;
