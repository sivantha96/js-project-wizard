import { Application, Request, Response } from 'express';
import { ERROR_MESSAGES } from './constants/response-messages.constant';
import { notFoundErrorResponse } from './services/response.service';

export class CommonRoutes {
    public route(app: Application) {
        app.get('/', (req: Request, res: Response) => {
            res.send(`${process.env.npm_package_name} API v${process.env.npm_package_version}`);
        });

        app.all('*', (req, res) => {
            notFoundErrorResponse(res, undefined, ERROR_MESSAGES.INVALID_URL);
        });
    }
}
