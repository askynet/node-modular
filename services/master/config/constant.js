
const ERROR_CODES = {
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED',
    AUTH_FAILED: 'AUTH_FAILED',
    NOT_FOUND: 'NOT_FOUND',
    NOT_ALLOWED: 'NOT_ALLOWED',
    ALREADY_PRESENT: 'ALREADY_PRESENT',
    INVALID_PARAMS: 'INVALID_PARAMS',
    INVALID_CREDENTIAL: 'INVALID_CREDENTIAL',
    PERMISSION_DENIED: 'PERMISSION_DENIED',
    RESET_PASSWORD: 'RESET_PASSWORD',
};

const MESSAGES = {
    ACC_NOT_FOUND: 'Account not found',
    AUTH_FAILED: 'Authentication failed. Please logged back.',
    NOT_FOUND: 'The requested resource could not be found.',
    NOT_ALLOWED: 'You are not allowed to perform this action.',
    ACC_ALREADY_PRESENT: 'Seems you already have account with us. Please try login',
    ALREADY_PRESENT: 'This item is already present.',
    INVALID_PARAMS: 'Invalid parameters provided. Please check your input.',
    INVALID_CREDENTIAL: 'The provided credentials are incorrect.',
    PERMISSION_DENIED: 'You do not have permission to access this resource.',
    RESET_PASSWORD: 'Password reset required. Please reset your password.',
    SSO_RESET: 'We encountered an error while processing your password reset request. If you are using SSO, please sign in with your SSO provider directly, or try again later.',
    PERMISSION_DENIED: 'Permission Denied! You do not have the necessary rights to perform this operation',
    SOMETHING_WENT_WRONG: 'We encountered an issue while processing your request. Please check your internet connection and try again. If the problem persists, contact support.'
}

module.exports = {
    ERROR_CODES,
    MESSAGES
}