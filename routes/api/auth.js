const router = require('express').Router();

//@route: GET api/auth
//@desc: Test route
//@access: public

router.route('/').get((req, res) => {
  res.send("Auth router");

});

module.exports = router;