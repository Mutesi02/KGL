const express = require('express');
const router = express.Router();
const Sales = require('../models/Sale');

router.get('/directorDash', async (req, res) => {
  try {
    const sales = await Sales.find();

    // Total revenue
    const totalRevenue = sales.reduce((sum, s) => sum + (parseFloat(s.tamount) || 0), 0);

    // Total tons sold
    const totalTons = sales.reduce((sum, s) => sum + (parseFloat(s.qsold) || 0), 0);

    // Total transactions
    const totalTransactions = sales.length;

    // Branch performance data
    const branchData = {};
    sales.forEach(s => {
      const branch = s.branch || 'Unknown';
      if (!branchData[branch]) {
        branchData[branch] = { revenue: 0, tons: 0 };
      }
      branchData[branch].revenue += parseFloat(s.tamount) || 0;
      branchData[branch].tons += parseFloat(s.qsold) || 0;
    });

    const branchPerformance = Object.entries(branchData).map(([branch, stats]) => ({
      branch,
      revenue: stats.revenue,
      tons: stats.tons
    }));

    res.render('directorDashboard', {
      totalRevenue,
      totalTons,
      totalTransactions,
      outstandingCredit: 0, // You can fetch real credit data here later
      branchPerformance
    });

  } catch (error) {
    console.error(error);
    res.status(500).send('Error loading dashboard');
  }
});

module.exports = router;
