const logRequest = (req, res, next) => {
    console.log("log APi :", req.path);
    next();
};

module.exports = logRequest;
