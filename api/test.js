const express = require('express');
const router = express.Router();
const model = require('../models');
const bcrypt = require('bcrypt');
const {requireAuthMiddleware} = require('../middlewares/auth');

router.get('/', async (req, res) => {
  const salt = await bcrypt.genSalt();
  const pass = await bcrypt.hash('monalisa', salt);
  console.log(pass)
  const user = await model.user.findOne({
    where: {
      school_id: 8859
    }
  })
  console.log(await user.can('view pages'))
  user.assignRole('admin');
  // const user = await model.user.build({
  //   name: 'Miqdad Farcha',
  //   school_id: 8859,
  //   email: 'miqdad.farcha@gmail.com',
  //   password: pass,
  // }).save()
  res.send({
    test: user
  });
})

module.exports = router;
