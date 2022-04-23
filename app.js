const express = require('express')
const playerDetails = require('./routers/players')

const PORT = 8000;
const app = express();
app.use(express.json())
app.use(playerDetails)

app.listen(PORT, () => {
    console.log("running successfully in Port: "+ PORT)
});