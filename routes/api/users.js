const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
let User = require('../../models/user.model');

//@route: POST api/users
//@desc: resgister user
//@acess: public

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;

//   const newUser = new User({username});

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
router.post('/',
[
  body('name','Name is required').not().isEmpty(),
  body('email','Please include a valid email').isEmail(),
  body('password','Please enter a password with 6 or more characters').isLength({min: 6})
],
(req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array()});
  }
  //console.log(req.body);
  res.send('Users router');
});

module.exports = router;