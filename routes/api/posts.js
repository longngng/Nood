const router = require('express').Router();

//@route: GET api/post
//@desc: Test route
//@access: public

router.route('/').get((req, res) => {
  res.send("Posts router");

});

module.exports = router;