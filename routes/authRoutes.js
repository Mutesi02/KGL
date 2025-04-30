const express = require("express");
const router = express.Router();
const passport = require("passport");
//import models
const Signup = require("../models/Signup");

router.get("/signingup", (req, res) => {
  res.render("signup");
});

router.post("/signingup", async (req, res) => {
  try {
    const user = new Signup(req.body);
    let existingUser = await Signup.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      return res.status(400).send("Not registered, email already exists");
    } else {
      await Signup.register(user, req.body.password, (error) => {
        if (error) {
          throw error;
        }
        res.redirect("/login");
      });
    }
    console.log(user);
  } catch (error) {
    res.status(400).render("signup");
    console.log(error);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    console.log(req.body);
    req.session.user = req.user;
    if (req.user.role === "manager") {
      res.redirect("/managerDash");
    } else if (req.user.role === "salesagent") {
      res.redirect("/salesAgents");
    } else if (req.user.role === "director") {
      res.redirect("/directorDash");
    } else {
      res.send("You do not have any role in the system");
    }
  }
);

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).send("error logging out");
      }
      res.redirect("/")
    });
  }
});

router.get("/usersList", async(req,res) =>{
  try {
      const users = await Signup.find().sort({$natural:-1});
      res.render("userlist", {
          users:users
      })
  } catch (error) {
     res.status(400).send("unable to find users in the db") 
  }
})

module.exports = router;
