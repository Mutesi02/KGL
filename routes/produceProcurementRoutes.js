const express = require('express');
const router = express.Router();
const Procurement = require('../models/Procurement'); // Your Mongoose model

// GET: Render the form
router.get('/produceProcurement', (req, res) => {
  res.render('produceProcurement'); // .pug file in views folder
});

// POST: Handle form submission
router.post('/produceProcurement', async (req, res) => {
  try {
    const procurement = new Procurement({
      Pname: req.body.Pname,
      Tproduce: req.body.Tproduce,
      Dprocurement: req.body.Dprocurement,
      Tprocurement: req.body.Tprocurement,
      tonnage: req.body.tonnage,
      cost: req.body.cost,
      dealerName: req.body.dealerName,
      dealerContact: req.body.dealerContact,
      branchName: req.body.branchName,
      Psold: req.body.Psold
    });

    await procurement.save();
    res.redirect('/produceProcurement'); // Or redirect elsewhere
  } catch (err) {
    console.error(err);
    res.status(500).send('Error recording procurement');
  }
});

module.exports = router;
