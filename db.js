const mongoose = require('mongoose')
const url = "mongodb://localhost/Players"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

let dbCon = mongoose.connection
dbCon.on("open", () => {
    console.log("Connected to DB")
})

module.exports = mongoose;