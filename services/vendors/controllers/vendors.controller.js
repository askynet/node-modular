const { VENDORS } = require("../models");

exports.getVendor = async (req, res) => {
    const user = await VENDORS.Vendors.findByPk(req.params.id);
    user ? res.json({
        code: 'SUCCESS',
        data: user
    }) : res.status(404).json({
        code: 'SUCCESS',
        error: 'Not found'
    });
};