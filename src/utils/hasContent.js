const AppError = require('./AppError');

function hasContent(content, message) {
  if (!content) {
    throw new AppError(message, 401);
  }
}

module.exports = hasContent;