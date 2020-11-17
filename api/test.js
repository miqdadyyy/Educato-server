const express = require('express');
const router = express.Router();
const model = require('../models');
const bcrypt = require('bcrypt');
const {requireAuthMiddleware} = require('../middlewares/auth');

router.get('/',requireAuthMiddleware, async (req, res) => {
  const salt = await bcrypt.genSalt();
  const pass = await bcrypt.hash('monalisa', salt);
  // console.log(pass)
  // const user = await model.User.build({
  //   name: 'Miqdad Farcha',
  //   schoolId: 8859,
  //   email: 'miqdad.farcha@gmail.com',
  //   password: pass,
  // }).save()
  res.send({});
})

module.exports = router;
