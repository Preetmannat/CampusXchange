const mongoose = require("mongoose");
const Item = require("../models/Schema.js");
const initData = require("./data.js");

main().then((req,res) => {
    console.log("DB is Connected");
}).catch((err) =>{
    console.log(err);
})
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/CampusXchange');
}

const initDB = async ()=>{
    await Item.deleteMany({});
    await Item.insertMany(initData.data);
    console.log("data was Initialied");
};
 initDB();