const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require("path");
const connectEnsureLogin = require("connect-ensure-login");

//import models
const Stock = require("../models/Stock")

//image upload configs
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, "public/imgs/uploads");
    },
    filename: (req, file, cb) => {
    cb(null, file.originalname);
    },
    });
    var upload = multer({ storage: storage });

router.get("/addStock", (req,res) =>{
    res.render("stock")
})

router.post('/addStock', upload.single("image"), async(req,res)=>{
    try {
     const stock = new Stock(req.body);
     stock.image = req.file.path;
     await stock.save();
    //  console.log(stock)
     res.redirect("/stockdata")
    } catch (error) {
     res.status(400).render("stock")
     console.log(error);
    }
 });

 router.get("/stockdata", async(req,res) =>{
    try {
        const produce = await Stock.find().sort({$natural:-1});
        console.log(produce)
        res.render("stockdata", {
            stocks:produce
        })
    } catch (error) {
       res.status(400).send("unable to find produce in the db") 
    }
  });

 // GET: Update Stock Form
 router.get("/updateStock/:id", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
   try {
     const updateStock = await Stock.findOne({_id:req.params.id});
     console.log(updateStock)
     res.render("updateStock", { stock: updateStock });
   } catch (error) {
     console.log(error)
     res.status(500).send("Unable to find stock in the database");
   }
 });
 
 router.post("/updateStock/:id", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
   try {
     await Stock.findOneAndUpdate({_id:req.params.id}, req.body);
     res.redirect("/stockdata");
   } catch (error) {
     console.error("Update error:", error);
     res.status(400).send("Unable to update stock");
   }
 });
 
 // POST: Delete Sale
 router.post("/deleteStock/:id", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
   try {
     await Stock.deleteOne({ _id: req.body.id });
     res.redirect("back");
   } catch (error) {
     res.status(500).send("Unable to delete stock");
   }
 });
 
module.exports = router;