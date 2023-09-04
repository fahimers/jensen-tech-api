const { validationResult } = require("express-validator");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

async function ParamsValidator(req, res, next) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
    return;
  }

  res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
    message: ReasonPhrases.UNPROCESSABLE_ENTITY,
    errors: errors.array(),
  });
}

module.export = ParamsValidator;
