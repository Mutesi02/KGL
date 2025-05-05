const express = require("express");
const router = express.Router();
const Payments = require("../models/Credits"); // Make sure this is correctly imported

// GET Route
router.get("/deferredPayments", (req, res) => {
    res.render("deferredPayments"); // Correct view name
});

// POST Route
router.post("/deferredPayments", async (req, res) => {
    try {
      const credit = new Credit(req.body);
      await credit.save();
      res.redirect("/deferredPayments");
    } catch (error) {
      console.error("Error saving payment:", error);
  
      // Fetch existing credits so the page still renders correctly
      const credits = await Credit.find();
      const totalCost = credits.reduce((sum, c) => sum + c.amountDue, 0);
      const totalPaid = credits.reduce((sum, c) => sum + (c.amountPaid || 0), 0);
      const remaining = totalCost - totalPaid;
      const percentPaid = totalCost ? Math.round((totalPaid / totalCost) * 100) : 0;
  
      res.status(400).render("deferredPayments", {
        error: "There was a problem saving the payment. Please try again.",
        credits,
        summary: { totalCost, totalPaid, remaining, percentPaid }
      });
    }
  });
  

module.exports = router;
