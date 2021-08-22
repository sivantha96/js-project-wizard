import { Request, Response } from 'express';
import { internalServerErrorResponse } from '../services/response.service';

export class GlobalErrorHandler {
    public handler(err: Error, req: Request, res: Response) {
        internalServerErrorResponse(res, undefined, err.message);
    }
}
