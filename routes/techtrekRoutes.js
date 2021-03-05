const express = require('express');
const router = express.Router();

//https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance

//https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current

//https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical

//https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view

//https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add

const {
  balance,
  pricingCurrent,
  pricingHistorical,
  transactionsView,
  transactionsAdd,
} = require('../controllers/techtrekControllers');