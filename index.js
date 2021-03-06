const config = require("config");
const { logger } = require("./services/logger");
const express = require("express");
const app = express();

// routes
require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/dbInit")();
require("./startup/config")();
require("./services/scheduler")();
require("./startup/validations")();

// PORT setting
const port = process.env.PORT || config.get("PORT");
app.listen(port, () => logger.log("info", `Listening on port ${port}`));
