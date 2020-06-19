const router = require('express').Router();
let Canteen = require('../models/canteen.model');

router.route('/').get((req, res) => {
  Canteen.find()
    .then(canteens => res.json(canteens))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const canteenname = req.body.canteenname;
  const description = req.body.description;

  const newCanteen = new Canteen({canteenname, description});

  newCanteen.save()
    .then(() => res.json('Canteen added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;