const { MASTERS } = require("../models");
const { handleCatchError, sendResponse } = require("../utils/error.handler");

exports.getArea = async (req, res) => {
    try {
        return sendResponse(res, { ok: 1 })
    } catch (error) {
        return handleCatchError(error, req, res)
    }
};