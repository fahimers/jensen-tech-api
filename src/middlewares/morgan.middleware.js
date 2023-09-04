const morgan = require('morgan');
const logger = require('~src/utils/logger');
const { IsDevEnv } = require('~src/utils/environment');

const stream = {
  // Use the http severity
  write: (message) => logger.http(message),
};

const skip = () => !IsDevEnv;

//:remote-addr :method :url :status :res[content-length] - :response-time ms
const MorganMiddleware = morgan(
  function (tokens, req, res) {
    return [
      tokens['remote-addr'](req, res),
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
    ].join(' ');
  },
  {
    stream: stream,
    skip,
  },
);

module.exports = MorganMiddleware;
