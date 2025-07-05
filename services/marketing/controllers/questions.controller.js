const { MARKETING } = require("../models");

exports.getQuestion = async (req, res) => {
    const user = await MARKETING.Questions.findByPk(req.params.id);
    user ? res.json({
        code: 'SUCCESS',
        data: user
    }) : res.status(404).json({
        code: 'SUCCESS',
        error: 'Not found'
    });
};