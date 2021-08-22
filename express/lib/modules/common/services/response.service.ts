import StatusCodes from 'http-status-codes';
import { Response } from 'express';
import { ERROR_CODES } from '../constants/error.constant';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../constants/response-messages.constant';

export function successResponse(res: Response, data?: any, message = SUCCESS_MESSAGES.SUCCESS, extraData = {}) {
    res.status(StatusCodes.OK).json({
        success: true,
        message,
        data,
        ...extraData,
    });
}

export function successWithErrorResponse(res: Response, errorCode: number) {
    const error = ERROR_CODES[errorCode];
    res.status(StatusCodes.OK).json({
        success: false,
        message: error.description,
        data: error,
    });
}

export function internalServerErrorResponse(res: Response, data?: any, message?: string) {
    console.log('\ntimestamp:', new Date().toISOString());
    console.log(data, message);
    if (data && data?.name === 'MongoError') {
        mongoErrorResponse(res, data, message);
    } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
            data,
        });
    }
}

export function mongoErrorResponse(res: Response, data?: any, message?: string) {
    console.log('\ntimestamp:', new Date().toISOString());
    console.log(data, message);
    let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    if (data && data?.code === 11000) {
        statusCode = StatusCodes.OK;
        message = message || ERROR_MESSAGES.DUPLICATE_INFORMATION;
        data = undefined;
    } else {
        message = message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
    }
    res.status(statusCode).json({
        success: false,
        message,
        data,
    });
}

export function unProcessableEntityErrorResponse(res: Response, data?: any, message = ERROR_MESSAGES.UNPROCESSABLE_ENTITY) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        success: false,
        message,
        data,
    });
}

export function validationErrorResponse(res: Response, errors?: any, message = ERROR_MESSAGES.UNPROCESSABLE_ENTITY) {
    const errMessage = errors && errors.length > 0 && errors[0]?.message ? errors[0]?.message : message;
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        success: false,
        message: process.env.NODE_ENV === 'production' ? ERROR_MESSAGES.UNPROCESSABLE_ENTITY : errMessage,
    });
}

export function insufficientParametersErrorResponse(res: Response, data?: any, message = ERROR_MESSAGES.INSUFFICIENT_PARAMETERS) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        success: false,
        message,
        data,
    });
}

export function unauthorizedErrorResponse(res: Response, data?: any, message = ERROR_MESSAGES.UNAUTHORIZED) {
    res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message,
        data,
    });
}

export function tokenExpireErrorResponse(res: Response, data?: any, message = ERROR_MESSAGES.TOKEN_EXPIRED) {
    res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message,
        data,
    });
}

export function tokenInvalidErrorResponse(res: Response, data?: any, message = ERROR_MESSAGES.TOKEN_INVALID) {
    res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message,
        data,
    });
}

export function notFoundErrorResponse(res: Response, data?: any, message = ERROR_MESSAGES.NOT_FOUND) {
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message,
        data,
    });
}
