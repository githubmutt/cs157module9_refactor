// ROUTES

const express = require("express")
const router = express.Router()


const Employee = require("../models/employees.js")


router.get("/", (req, res) => {
    //app.get("/", (req, res) => {
     
      if( req.query.filter){
          req.query.filter = JSON.parse(req.query.filter)
          console.log( req.query.filter)
      }
    
      Employee.find(req.query.filter).exec(function(err, result) {
        if (!err) {
          res.status(200).send(result);
        } else {
          res.status(400).send(err.message);
        }
      });
    });


router.get("/:id", (req, res) => {

    Employee.findById(req.params.id, function(err, result) {
      if (!err) {
        res.status(200).send(result);
      } else {
        res.status(400).send(err.message);
      }
    });
  });


router.post("/", (req, res) => { 
    req.body.email = req.body.email.toLowerCase()
    var newEmployee = new Employee(req.body);
    console.log( newEmployee)
    newEmployee.save(function(err, result) {
      if (!err) {
        res.status(201).send(result);
      } else {
        res.status(400).send(err.message);
      }
    });
  });


router.delete("/:id", (req, res) => {
    Employee.findByIdAndDelete(req.params.id, function(err, result) {
      if (!err) {
        res.status(200).send(result);
      } else {
        res.status(200).send(err.message);
      }
    });
  });

router.delete("/", (req, res) => {
    Employee.deleteMany(function(err, result) {
      if (!err) {
        res.status(200).send(result);
      } else {
        res.status(400).send(err.message);
      }
    });
  });
  

router.put("/", function( req,res){

    
})

router.patch("/:id", (req, res) => {
    Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      },
      function(err, result) {
        if (!err) {
          res.status(200).send(result);
        } else {
          res.status(400).send(err.message);
        }
      }
    );
  });

module.exports = router