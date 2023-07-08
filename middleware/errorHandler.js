const logEvents = require('./logger');

function errorHandler(err, req, res, next) {
  const message = `${err.message} ${req.method} ${req.originalUrl}`;
  logEvents(message, 'error');

  res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = errorHandler;