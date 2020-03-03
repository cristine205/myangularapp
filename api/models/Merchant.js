const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Merchant
let Merchant = new Schema({
  MerchantName: {
    type: String
  },
  MerchantCategory: {
    type: String
  },
  MerchantPhoneNo: {
    type: Number
  }
},{
    collection: 'Merchant'
});

module.exports = mongoose.model('Merchant', Merchant);