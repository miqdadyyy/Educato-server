const Joi = require('joi');

function validateLogin(data){
  const schema = Joi.object({
    schoolId: Joi.number()
      .required(),
    
    password: Joi.string()
      .min(6)
      .max(32)
      .required(),
  });
  
  return schema.validate(data);
}

module.exports = {
  validateLogin
}
