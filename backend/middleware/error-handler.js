// Import the createCustomError function and the CustomAPIError class
const { CustomAPIError } = require('../errors/custom-error');
const { createCustomError } = require('../errors/custom-error');

// Define the error-handler middleware to accept the createCustomError function as an argument
const errorhandlerMiddleware = (createCustomError) => (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  // If the error is not an instance of CustomAPIError, create a new instance using the createCustomError function
  const error = createCustomError(
    err.message || 'Something went wrong',
    500
  );

  // Return the error response
  res.status(error.statusCode).json({ msg: error.message });
};

module.exports = errorhandlerMiddleware;