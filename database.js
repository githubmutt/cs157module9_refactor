// Database

const mongoose = require("mongoose")


let url = "mongodb+srv://cs157:tomato1349@qljr1c3.mongodb.net/testdb?retryWrites=true&w=majority"
url = "mongodb+srv://cs157:tomato1349@cs157.qljr1c3.mongodb.net/EmpployeeApp?retryWrites=true&w=majority"


const conn = mongoose.connect(
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



module.exports = conn