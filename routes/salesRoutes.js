const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");

// Models
const Sale = require("../models/Sale");
const Stock = require("../models/Stock");

// GET: Show Add Sale Form
router.get("/addSale/:id", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  const user = req.session.user;
  if (user.role !== "salesagent" && user.role !== "manager") {
    return res.status(403).send("You are not allowed to access this page");
  }

  try {
    const produce = await Stock.findById(req.params.id);
    if (!produce) return res.status(404).send("Produce not found");

    res.render("sales", {
      stock: produce,
      fullName: user.full_name,
      branch: user.branch
    });
  } catch (error) {
    console.error("Error fetching produce:", error);
    res.status(500).send("Internal Server Error");
  }
});

// POST: Add Sale
router.post("/addSale/:id", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  const user = req.session.user;
  if (!user || (user.role !== "salesagent" && user.role !== "manager")) {
    return res.status(403).send("Unauthorized access");
  }

  try {
    const produce = await Stock.findById(req.params.id);
    if (!produce) return res.status(404).send("Produce not found");

    const quantity = Number(req.body.qsold);
    const unitPrice = Number(req.body.uprice);
    const totalAmount = Number(req.body.tamount);

    if (isNaN(quantity) || quantity <= 0) {
      return res.status(400).send("Invalid quantity");
    }

    if (produce.tonnage < quantity) {
      return res.status(400).send(`Only ${produce.tonnage} kgs available`);
    }

    const sale = new Sale({
      pname: req.body.pname,
      tproduce: req.body.tproduce,
      dsale: req.body.dsale,
      tsale: req.body.tsale,
      qsold: quantity,
      uprice: unitPrice,
      tamount: totalAmount,
      customerName: req.body.customerName,
      customerContact: req.body.customerContact,
      seller: user._id,
      branch: user.branch,
      paymentMethod: req.body.paymentMethod,
    });

    await sale.save();

    produce.tonnage -= quantity;
    await produce.save();

    res.redirect("/sales/salesList");
  } catch (error) {
    console.error("Error saving sale:", error);
    res.status(500).send("Internal Server Error");
  }
});

// GET: Sales List
router.get("/salesList", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    const items = await Sale.find().sort({ dsale: -1 });
    res.render("saleslist", { sales: items });
  } catch (error) {
    console.error("Error loading sales list:", error);
    res.status(500).send("Unable to retrieve sales");
  }
});

// GET: Update Sale Form
router.get("/updateSale/:id", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    const updateSale = await Sale.findOne({_id:req.params.id});
    console.log(updateSale)
    res.render("updatesale", { sale: updateSale });
  } catch (error) {
    console.log(error)
    res.status(500).send("Unable to find sale in the database");
  }
});

router.post("/updateSale/:id", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    await Sale.findOneAndUpdate({_id:req.params.id}, req.body);
    res.redirect("/sales/salesList");
  } catch (error) {
    console.error("Update error:", error);
    res.status(400).send("Unable to update sale");
  }
});

// POST: Delete Sale
router.post("/deleteSale", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    await Sale.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (error) {
    res.status(500).send("Unable to delete sale");
  }
});

module.exports = router;
