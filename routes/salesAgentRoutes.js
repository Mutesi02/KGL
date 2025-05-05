const express = require('express');
const router = express.Router();
const SalesAgent = require('../models/SalesAgent');
const Stock = require('../models/Stock');

router.get('/salesAgents', async (req, res) => {
  try {
    const salesData = await SalesAgent.find().sort({ saleDate: -1 });
    res.render('salesAgent', {
      agentName: 'Mutoni',
      sales: salesData,
    });
  } catch (err) {
    console.error('Error fetching sales data:', err);
    res.status(500).send('Server Error');
  }
});
module.exports = router;