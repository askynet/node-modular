require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { MASTERS } = require('./models');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'dev') {
    return res.redirect('/api-docs');
  }
  res.send('Hello from Master Service!');
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', require("./routes"));

// Sync DB
(async function () {
  await MASTERS.sequelize.sync({ logging: console.log });
})().then(async () => {
  console.log('\nMaster Database synchronized');
});

const port = process.env.PORT || 9002;
app.listen(port, () => {
  console.log(`Master service running on port ${port}`);
});