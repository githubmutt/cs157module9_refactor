const express = require("express");
const mongoose = require("mongoose");
const app = express();




const database = require( "./database.js")         // database gets set to module.exports = conn 
const employeeRoutes = require("./routes/employees.js")


app.use(express.static("public"));
app.use(express.json());

app.use("/api/employees", employeeRoutes)


app.listen(8080 , () =>{

        console.log("Server started: #8080")


})
/*


mongoose.connect(
  // Use your own connection string here. Make sure the database name is EmployeeApp
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB - EmployeeApp database (Module8 ver2)...");
    }
  }
);

// https://www.codegrepper.com/search.php?answer_removed=1&q=mongoose%20matching%20validation
var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return re.test(email)
}

var validatePhone = function(phone){
   var re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
   return re.test(phone)
}

// https://www.codegrepper.com/search.php?answer_removed=1&q=mongoose%20matching%20validation

const employeeSchema = new mongoose.Schema({
  name: { type: String, minlength:7 , maxlength:42 , required: true    },
  email: { type: String, minlength:7, maxlength: 42, required: true ,
           index:{
              unique: true,
              collation: {locale: "em" , strength:2}
           },
           validate: [ validateEmail, 'For the grace of God, help is on the way!']
  
  },
  address: { type: String },
  phone: { type: String , minlength:10,
            validate: [validatePhone , 'Enter phone # in (415) 800-7646 or 415-800-7646 format']
  },
  created:{
     type: Date,
     default:  Date.now()
  }
});

const Employee = mongoose.model("Employee", employeeSchema);
*/
/*
//app.post("/api/employees", (req, res) => {
app.post("/", (req, res) => { 
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

// STEP 4 - ADD FILTER CAPABILITY TO GET HANDLER BELOW
// URL: /api/employees?filter={"email":"rokamoto@lacitycc.edu"}&select={"task:2"}&sort={"task",1}
app.get("/api/employees", (req, res) => {
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

app.get("/api/employees/:id", (req, res) => {

  Employee.findById(req.params.id, function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(400).send(err.message);
    }
  });
});

app.patch("/api/employees/:id", (req, res) => {
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

app.delete("/api/employees/:id", (req, res) => {
  Employee.findByIdAndDelete(req.params.id, function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(200).send(err.message);
    }
  });
});

app.delete("/api/employees", (req, res) => {
  Employee.deleteMany(function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(400).send(err.message);
    }
  });
});


*/