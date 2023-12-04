const mongoose=require("mongoose");
// require("dotenv").config();

const connection=mongoose.connect('mongodb+srv://vaishnavi:punekar@cluster0.u9zjkph.mongodb.net/ContactScheduler?retryWrites=true&w=majority');


module.exports={connection}