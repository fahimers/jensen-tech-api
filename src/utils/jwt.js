const jwt = require("jsonwebtoken");
const log = require("@src/utils/logger");

const JwtAlgorithm = "HS256";

async function VerifyToken(bearer) {
  const token = bearer.split(" ");
  if (!token[1]) {
    return null;
  }

  let decoded;

  try {
    decoded = jwt.verify(token[1], process.env.JWT_SECRET, {
      algorithms: [JwtAlgorithm],
      complete: true,
      ignoreExpiration: false,
      ignoreNotBefore: false,
    });
  } catch (err) {
    log.error(err);

    return null;
  }

  return {
    id: decoded.payload.id,
    email: decoded.payload.email,
  };
}

async function SignToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: JwtAlgorithm,
    expiresIn: process.env.JWT_TTL,
  });
}

module.exports = {
  VerifyToken,
  SignToken,
};
