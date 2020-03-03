
const express = require('express');
const app = express();
const merchantRoutes = express.Router();

// Require Merchant model in our routes module
let Merchant = require('../models/Merchant');

// Defined store route
merchantoutes.route('/add').post(function (req, res) {
  let merchant = new Merchant(req.body);
  merchant.save()
    .then(merchant => {
      res.status(200).json({'Merchant': 'Merchant has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
merchantRoutes.route('/').get(function (req, res) {
  Merchant.find(function (err, merchants){
    if(err){
      console.log(err);
    }
    else {
      res.json(merchants);
    }
  });
});

// Defined edit route
merchantRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Merchant.findById(id, function (err, merchant){
      res.json(merchant);
  });
});

//  Defined update route
merchantRoutes.route('/update/:id').post(function (req, res) {
  Merchant.findById(req.params.id, function(err, merchant) {
    if (!merchant)
      res.status(404).send("Record not found");
    else {
      merchant.MerchantName = req.body.MerchantName;
      merchant.MerchantCategory = req.body.MerchantCategory;
      merchant.MerchantPhoneNo = req.body.MerchantPhoneNo;

      merchant.save().then(merchant => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
merchantRoutes.route('/delete/:id').get(function (req, res) {
    Merchant.findByIdAndRemove({_id: req.params.id}, function(err, merchant){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = merchantRoutes;
