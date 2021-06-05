'use strict';
require('dotenv').config();
const app = require('./app');

const SERVER_PORT = process.env.SERVER_PORT || 8080;

app.listen(SERVER_PORT, () => console.log(`Server ready at *:${SERVER_PORT}`));

