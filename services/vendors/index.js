require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { VENDORS } = require('./models');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'dev') {
    return res.redirect('/api-docs');
  }
  res.send('Hello from Vendor Service!');
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', require("./routes"));

// Sync DB
(async function () {
  await VENDORS.sequelize.sync({ logging: console.log });
})().then(async () => {
  console.log('\nVendor Database synchronized');
});

const port = process.env.PORT || 9004;
app.listen(port, () => {
  console.log(`Vendor service running on port ${port}`);
});