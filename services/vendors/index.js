require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const app = express();

app.use(express.json());
app.use('/vendors', require("./routes/vendor.route"));

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log(`Vendors service running on port ${process.env.PORT}`));
});