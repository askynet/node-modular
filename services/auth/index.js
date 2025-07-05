require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { AUTH } = require('./models');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'dev') {
    return res.redirect('/api-docs');
  }
  res.send('Hello from Auth Service!');
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', require("./routes"));

// Sync DB
(async function () {
  await AUTH.sequelize.sync({ logging: console.log });
})().then(async () => {
  console.log('\nDatabase synchronized');
});

const port = process.env.PORT || 9001;
app.listen(port, () => {
  console.log(`Auth service running on port ${port}`);
});