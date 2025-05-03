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
        const deferredPayments = new Payments(req.body);
        console.log(deferredPayments);
        await deferredPayments.save();
        res.redirect("/deferredPayments");
    } catch (error) {
        console.error("Error saving payment:", error);
        res.status(400).render("deferredPayments", {
            error: "There was a problem saving the payment. Please try again."
        });
    }
});

module.exports = router;
