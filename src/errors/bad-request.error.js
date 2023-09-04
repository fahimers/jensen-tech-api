const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const BaseError = require('./base.error');

class BadRequestError extends BaseError {
  constructor(
    description = ReasonPhrases.BAD_REQUEST,
    statusCode = StatusCodes.BAD_REQUEST,
    isOperational = true,
  ) {
    super('BadRequestError', statusCode, isOperational, description);
  }
}

module.exports = BadRequestError;
