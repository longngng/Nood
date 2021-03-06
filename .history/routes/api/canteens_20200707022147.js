const router = require('express').Router();
let Canteen = require('../../models/canteen.model');

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
  const rating_num = req.body.rating_num;
  const img_link = req.body.img_link;
  const review = req.body.review;
  const campus = req.body.campus
  //const newCanteen = new Canteen({canteenname, description});
  const newCanteen = new Canteen({name, sig_dish, desc, rating, rating_num, review, img_link,campus});
  newCanteen.save()
    .then(() => res.json('Canteen added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').post((req, res) => {
  const searchkey = req.body.searchkey;
  //{"rating" : 3}
  //Canteen.find({"rating" : searchkey})
  Canteen.find({$text: {$search: searchkey}})
    .then(canteens => {
      res.json(canteens);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/rate').post((req,res) => {
  const canteenId = req.params.id;
  Canteen.findById(canteenId) .then (
    canteen => {
      
    }
  )

})

module.exports = router;