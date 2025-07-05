const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use('/api', require("./routes/proxy.route"));

app.listen(PORT, () => {
    console.log(`API Gateway running on http://localhost:${PORT}`);
});
