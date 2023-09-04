const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const BaseError = require('./base.error');

class YelpApiError extends BaseError {
  constructor(
    description = ReasonPhrases.UNPROCESSABLE_ENTITY,
    statusCode = StatusCodes.UNPROCESSABLE_ENTITY,
    isOperational = true,
  ) {
    super('YelpApiError', statusCode, isOperational, description);
  }
}

module.exports = YelpApiError;
