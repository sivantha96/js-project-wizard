import { ERROR_MESSAGES } from './response-messages.constant';

export const ERROR_CODES = {
    1001: {
        error_code: 1001,
        description: ERROR_MESSAGES.INVALID_CREDENTIALS,
    },
    1002: {
        error_code: 1002,
        description: ERROR_MESSAGES.USER_NOT_FOUND,
    },
    1003: {
        error_code: 1003,
        description: ERROR_MESSAGES.NOT_MATCHED,
    },
    1004: {
        error_code: 1004,
        description: ERROR_MESSAGES.EXPIRED_OTP,
    },
    1005: {
        error_code: 1005,
        description: ERROR_MESSAGES.ALREADY_EXISTS,
    },
    1006: {
        error_code: 1006,
        description: ERROR_MESSAGES.DATA_NOT_FOUND,
    },
};
