const errorResponse = (res, error) => {
  return res.status(500).json({
    success: false,
    message: error.message,
  });
};

const successResponse = (res, message) => {
  return res.status(200).json({
    success: true,
    message: message,
  });
};

const successFetchResponse = (res, data) => {
  return res.status(200).json({
    success: true,
    data: data,
  });
};

const notFoundResponse = (res, data) => {
  return res.status(404).json({
    success: false,
    message: 'Data not found',
  });
};

module.exports = {
  errorResponse,
  successResponse,
  successFetchResponse,
  notFoundResponse
}