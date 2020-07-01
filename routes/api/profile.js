const router = require('express').Router();

//@route: GET api/profile
//@desc: Test route
//@access: public

router.route('/').get((req, res) => {
  res.send("Profile router");

});

module.exports = router;