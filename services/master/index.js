require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const app = express();

app.use(express.json());
app.use('/area', require("./routes/area.route"));

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log(`Master service running on port ${process.env.PORT}`));
});