const { AUTH } = require("../models");

exports.getUser = async (req, res) => {
    const user = await AUTH.Users.findByPk(req.params.id);
    user ? res.json(user) : res.status(404).json({ error: 'Not found' });
};