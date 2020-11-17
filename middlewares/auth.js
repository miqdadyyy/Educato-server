const jwt = require('jsonwebtoken');

const requireAuthMiddleware = (req, res, next) => {
  const {authorization} = req.headers;
  if (authorization) {
    const jwtToken = authorization.split(' ')[1];
    
    if (jwtToken) {
      try {
        const verify = jwt.verify(jwtToken, process.env.JWT_PRIVATE_KEY);
        next();
      } catch (error) {
        return Response.badResponse(res, error);
      }
    } else {
      return Response.unauthorized(res);
    }
  } else {
    return Response.unauthorized(res);
  }
}

module.exports = {
  requireAuthMiddleware
}
