const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require("path");

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
     console.log(stock)
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
  router.post("/delete/:id", async(req,res) =>{
    try {
        const stock = await Stock.findOneAndDelete({_id:req.params.id});
        console.log(stock)
        res.redirect("/stockdata",)
    } catch (error) {
       res.status(400).send("falied to delete") 
       console.log(error)
    }
  });
module.exports = router;