const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    name : {
        type : String, 
        required : [true, "something must be provided"],
        trim : true,
        maxlength : [21,"cannot be more than 21 characters"]
    },
    phoneNo : {
        type : Number,
        required : [true, "needed"],
        validate: {
            validator: function(v) {
              // Validate phone number format using regex
              // Allow for 10-digit Indian phone numbers without country code
              return /^\d{10}$/.test(v);
            },
            message: 'Invalid phone number format. Should be 10 digits.'
          }
    },
    product : {
        type : String,
        required : true,
        trim : true
    },
    prodQuantity : {
        type : Number,
        required : true,
        min : 1
    },
    exportLocation: {
        type: String,
        required: true,
        trim: true,
      },
    destinationLocation: {
        type: String,
        required: true,
        trim: true,
    }
    // createdAt : {
    //     type : Date,
    //     default : Date.now(),
    // }
})

module.exports = mongoose.model("query", querySchema);