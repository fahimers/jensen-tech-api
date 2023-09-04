const logger = require("@src/utils/logger");
const BaseError = require("../errors/base.error");

async function ErrorHandler(err, req, res, next) {
  const response = {
    message: "Internal server error",
    errors: [],
  };

  if (err instanceof BaseError) {
    res.status(err.statusCode);
    response.message = err.message;
  }

  logger.error(err.message + ". " + response.errors.join(", "));

  res.json(response);
}

module.exports = ErrorHandler;
