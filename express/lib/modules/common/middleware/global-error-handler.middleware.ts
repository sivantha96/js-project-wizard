import { Request, Response } from 'express';
import { internalServerErrorResponse } from '../services/response.service';

export function GlobalErrorHandler(err: Error, req: Request, res: Response) {
    internalServerErrorResponse(res, err, err.message);
}
