const router = require('express').Router();
let Canteen = require('../models/canteen.model');

router.route('/').get((req, res) => {
  Canteen.find()
    .then(canteens => res.json(canteens))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  //const canteenname = req.body.canteenname;
  //const description = req.body.description;
  const name = req.body.name;
  const desc = req.body.desc;
  const sig_dish = req.body.sig_dish;
  const rating = req.body.rating;
  const img_link = req.body.img_link;
  const review = req.body.review;
  
  //const newCanteen = new Canteen({canteenname, description});
  const newCanteen = new Canteen({name, sig_dish, desc, rating, review, img_link});
  newCanteen.save()
    .then(() => res.json('Canteen added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').post((req, res) => {
  const searchkey = req.body.searchkey;
  
  Canteen.find()
    .then(canteens => {
      res.json(canteens);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;