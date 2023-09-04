const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const { VerifyToken } = require('~src/utils/jwt');

async function ValidateJwt(req, res, next) {
  if (!req.headers.authorization) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: ReasonPhrases.UNAUTHORIZED });

    return;
  }

  const auth = await VerifyToken(req.headers.authorization);
  if (!auth) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      message: ReasonPhrases.UNAUTHORIZED,
    });

    return;
  }

  req.auth = auth;

  next();
}

module.export = ValidateJwt;
