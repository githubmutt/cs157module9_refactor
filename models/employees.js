
// Models/employees

const mongoose = require("mongoose")

// https://www.codegrepper.com/search.php?answer_removed=1&q=mongoose%20matching%20validation
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
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

// exports
  module.exports = Employee