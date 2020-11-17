const Response = class {
  static success(res, message = null, data = null, code = 200){
    res.statusCode = code;
    res.send({
      statusCode: code,
      message,
      data
    })
  }
  
  static badResponse(res, message = null, data = null){
    const code = 400;
    res.statusCode = code;
    res.send({
      statusCode: code,
      message: message + ''
    })
  }
  
  static unauthorized(res){
    const code = 401;
    res.statusCode = code;
    res.send({
      statusCode: code,
      message: 'Unauthorized'
    })
  }
  
  static forbidden(res){
    const code = 403;
    res.statusCode = code;
    res.send({
      statusCode: code,
      message: 'Forbidden'
    })
  }
}

module.exports = Response;
