/**
 * Custom error formatter for express-validator
 */
const errorFormatter = ({ location, msg, param }) => {
  return `${location}[${param}]: ${msg}`;
};

module.exports = errorFormatter;
