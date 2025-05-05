const express = require('express');
const router = express.Router();
const Sales = require('../models/Sale');

router.get('/directorDash', async (req, res) => {
  try {
    const sales = await Sales.find();

    const totalRevenue = sales.reduce((sum, s) => sum + (parseFloat(s.tamount) || 0), 0);
    const totalTons = sales.reduce((sum, s) => sum + (parseFloat(s.qsold) || 0), 0);
    const totalTransactions = sales.length;

    const branchData = {};
    const produceData = {};

    sales.forEach(s => {
      const branch = s.branch || 'Unknown';
      const produce = s.produce || 'Unknown';

      if (!branchData[branch]) {
        branchData[branch] = { revenue: 0, tons: 0 };
      }
      branchData[branch].revenue += parseFloat(s.tamount) || 0;
      branchData[branch].tons += parseFloat(s.qsold) || 0;

      if (!produceData[produce]) {
        produceData[produce] = { tons: 0, revenue: 0 };
      }
      produceData[produce].tons += parseFloat(s.qsold) || 0;
      produceData[produce].revenue += parseFloat(s.tamount) || 0;
    });

    const branchPerformance = Object.entries(branchData).map(([branch, stats]) => ({
      branch,
      revenue: stats.revenue,
      tons: stats.tons
    }));

    const salesByProduce = Object.entries(produceData).map(([produceName, stats]) => ({
      produceName,
      tonsSold: stats.tons,
      revenue: stats.revenue
    }));

    res.render('directorDashboard', {
      totalRevenue,
      totalTons,
      totalTransactions,
      outstandingCredit: 0, // Replace with real logic later
      branchPerformance,
      salesByProduce
    });

  } catch (error) {
    console.error(error);
    res.status(500).send('Error loading dashboard');
  }
});

module.exports = router;
