const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");

//import models
const Sale = require("../models/Sale");
const Stock = require("../models/Stock");

router.get("/addSale/:id", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  if (
    req.session.user.role === "salesagent " ||
    req.session.user.role === "manager"
  ) {
    try {
      const stock = await Stock.findOne({ _id: req.params.id });
      res.render("sales", { stock });
    } catch (error) {
      res.status(400).send("unable to find item in the db");
    }
  } else {
    res.send("You are not allowed to access this page");
  }
});
router.post("/addSale/:id", async (req, res) => {
  try {
    await Sale.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.redirect("/sales/salesList");
  } catch (error) {
    console.log(error)
    res.status(400).send("Unable to update sale in the database");
  }
});

router.get("/salesList", async (req, res) => {
  try {
    const items = await Sale.find().sort({ $natural: -1 });
    res.render("saleslist", {
      sales: items,
    });
  } catch (error) {
    console.log(error)
    res.status(400).send("unable to find items in the db");
  }
});

router.get("/updateSale/:id", async (req, res) => {
  try {
    const updateSale = await Sale.findOne({ _id: req.params.id });
    console.log(updateSale)
    res.render("updatesale", { sale: updateSale });
  } catch (error) {
    res.status(400).send("unable to find sales in the db");
  }
});
router.post("/updateSale", async (req, res) => {
  try {
    await Sale.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/sales/salesList");
  } catch (error) {
    res.status(400).send("unable to update sales in the db");
  }
});
router.post(
  "/deleteSale",
  connectEnsureLogin.ensureLoggedIn(),
  async (req, res) => {
    try {
      await Sale.deleteOne({ _id: req.body.id });
      res.redirect("back");
    } catch (error) {
      res.status(400).send("unable to delete sale in the db");
    }
  }
);

router.get("/formValidation", (req, res)=>{
  res.render("validation")
})

router.post("/newSale", async (req, res)=> {
try {
  const sale = new Sale(req.body)
  console.log(sale)
  await sale.save()
  res.redirect("/salesList")
} catch (error) {
  console.log(error)
  res.status(400).send("Can't save new produce")
}
}
)
module.exports = router;
