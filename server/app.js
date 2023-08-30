const express = require('express');
const app = express();
const apiRoutes = require('./routes/routes');

require('dotenv').config();

const PORT = process.env.PORT;

app.use('/api', apiRoutes)

app.listen(PORT, function () {
  console.log(`Server listening to port ${PORT}`);
});