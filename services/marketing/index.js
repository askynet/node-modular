require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const app = express();

app.use(express.json());
app.use('/questions', require("./routes/questions.route"));

sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => console.log(`Mareting service running on port ${process.env.PORT}`));
});