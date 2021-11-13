const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = 3001

app.use(bodyParser.json());

const routes = require("./config/routes")
app.use(routes);

app.listen(port, () => {
    console.log(`[EldoradoPrime] Running on port ${port}`)
});