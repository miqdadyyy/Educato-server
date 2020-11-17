const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Model = require('../models');
const Validator = require('../validators');

const EXPIRE_TOKEN_TIME = 60 * 60;

const AuthenticationService = class {
  async login(req, res) {
    const {schoolId, password} = req.body;
    
    const validation = Validator.validateLogin({schoolId, password});
    if(validation.error){
      return Response.success(res, validation.error.message, null, 422);
    }
    
    const user = await Model.User.findOne({
      where: {
        schoolId: schoolId
      }
    });

    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if(checkPassword){
        const token = jwt.sign({
          id: user.id,
          schoolId: user.schoolId,
          name: user.name,
          email: user.email
        }, process.env.JWT_PRIVATE_KEY, {
          expiresIn: EXPIRE_TOKEN_TIME
        });
        
        return Response.success(res, 'Login Success', {
          user: {
            id: user.id,
            schoolId: user.schoolId,
            name: user.name,
            email: user.email,
          },
          token,
          expireTime: EXPIRE_TOKEN_TIME
        });
      } else {
        return Response.success(res, 'Password is incorrect');
      }
    } else {
      return Response.success(res, `User with id '${schoolId}' not found`);
    }
  }
}

module.exports = new AuthenticationService();
