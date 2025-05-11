function notFound(req, res, next) {
  res.status(404);
  res.json({
    errorStatus: 404,
    errorMessage: "Non trovata",
  });
}
module.exports = notFound;
