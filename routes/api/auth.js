const router = require('express').Router();
const auth = require('../../middleware/auth');

//@route: GET api/auth
//@desc: Test route
//@access: public

router.get('/', auth, async (req, res) => res.send("Auth route"));

module.exports = router;