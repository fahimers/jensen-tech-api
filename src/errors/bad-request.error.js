const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class BadRequestError extends BaseError {
  constructor(
    description = "Bad request",
    statusCode = StatusCodes.BAD_REQUEST,
    isOperational = true
  ) {
    super("BadRequestError", statusCode, isOperational, description);
  }
}

export default BadRequestError;
