const { sendResponse, handleCatchError } = require("../utils/error.handler");

exports.getQuestion = async (req, res) => {
    try {
        return sendResponse(res, { ok: 1 })
    } catch (error) {
        return handleCatchError(error, req, res)
    }
};