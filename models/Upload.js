const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
datetoday:{
    type:Date,
    required: true,
    trim: true
},
producename: {
    type:String,
    required: true
},
ward: {
    type:String
},
producetype: {
    type:String
},
unitprice: {
    type:Number
},
produceimage: {
    type:Buffer
},
quantity: {
    type:String
},
address: {
    type:String
},
modeofpayment: {
    type:String,
    unique: true
},
modeofdelivery: {
    type:String
},
foid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Registration',
    required: true
},
status:{
    type: String,
    default:'Pending',
    enum: ['Pending', 'Approved']
}
})
module.exports = mongoose.model('Upload',userSchema);