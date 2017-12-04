const winston = require('winston');
const tsFormat = () => (new Date());

const logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: 'info',
    }),
    new (winston.transports.File)({
      filename: 'info.log',
      timestamp: tsFormat,
      level: 'info',
    }),
  ],
});

logger.info({page: 'Testing', user: ''});

module.exports = logger;
