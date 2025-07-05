const { get } = require("lodash");
const { ERROR_CODES, MESSAGES } = require("../config/constant");

module.exports.sendResponse = (res, data) => {
    res.status(200).json({
        code: ERROR_CODES.SUCCESS,
        data: data
    });
}

module.exports.throwError = (message) => {
    throw new Error(message)
}

module.exports.handleCatchError = (error, req, res) => {
    res.status(500).json({
        code: ERROR_CODES.FAILED,
        error: this.getErrorMessage(error, req)
    });
}

module.exports.getErrorMessage = (error, req) => {
    console.log('error', error)
    let message = MESSAGES.SOMETHING_WENT_WRONG;

    if (get(req, 'method', '').toLowerCase() == 'delete' && error.name === 'SequelizeForeignKeyConstraintError') {
        message = `Cannot delete record due to child elements are present`
    } else if (get(req, 'method', '').toLowerCase() == 'post' && error.name === 'SequelizeUniqueConstraintError') {
        message = `Duplicate record found`
    }
    else if (error.message.indexOf('cannot be null') > -1) {
        const match = error.message.match(/Column '(.+?)' cannot be null/);
        if (match) {
            message = `Please provide valid ${match[1]}`;
        }
        else {
            message = error.message.toString();
        }
    }
    else {
        message = process.env.NODE_ENV === 'dev' ? error.message : MESSAGES.SOMETHING_WENT_WRONG
    }
    return message;
}