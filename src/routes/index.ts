import { Router } from 'express';
import routerEstoque from './router.estoque';

const routes = Router();

routes.use('/estoque', routerEstoque);

export default routes;
