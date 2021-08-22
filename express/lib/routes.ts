import { Application } from 'express';

import { CommonRoutes } from './modules/common/routes';

export default (app: Application) => {
    const commonRoutes = new CommonRoutes();

    commonRoutes.route(app);
};
