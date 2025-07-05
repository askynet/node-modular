require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const app = express();

app.use(express.json());
app.use('/users', require("./routes/user.route"));

sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => console.log(`✅ Auth service running on port ${process.env.PORT}`));
});