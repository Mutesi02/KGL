const express = require('express');
const router = express.Router();
const Procurement = require('../models/Procurement');
const Sale = require('../models/Sale'); // Assuming you have this model
const Stock = require('../models/Stock'); // Assuming this model tracks current stock

  router.get("/managerDash", async(req,res) =>{
      try {
        const recentProcurements = await Procurement.find().sort({ Dprocurement: -1 }).limit(3);
        const recentSales = await Sale.find().sort({ 
            dsale: -1 }).limit(3);
          // Total procurements in kg
          const totalProcurementsAgg = await Procurement.aggregate([
            { $group: { _id: null, total: { $sum: "$tonnage" } } }
          ]);
          const totalProcurements = totalProcurementsAgg[0]?.total || 0;
      
          // Total sales in kg
          const totalSalesAgg = await Sale.aggregate([
            { $group: { _id: null, total: { $sum: "$tonnage" } } }
          ]);
          const totalSales = totalSalesAgg[0]?.total || 0;
      
          // Low stock (less than 500kg for example)
          const lowStockCount = await Stock.countDocuments({ quantity: { $lt: 500, $gt: 0 } });
      
          // Out of stock
          const outOfStockCount = await Stock.countDocuments({ quantity: { $lte: 0 } });
      
          res.render("managerDashboard", {
            recentProcurements,     // Array of latest procurement documents
            totalProcurements,      // Number (sum of all tonnage)
            totalSales,             // Number (sum of all sold tonnage)
            lowStockCount,          // Number
            outOfStockCount,        // Number
            recentSales             // Array of latest sales documents
          })
      } catch (error) {
         res.status(400).send("unable to find produce in the db") 
      }
    });

module.exports = router;