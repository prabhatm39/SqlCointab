const express = require("express");

const cors = require('cors');


const app = express();

const PORT = 8080;

app.use(express.json());
app.use(cors());

const {userRouter} = require('./Router');
const {connect} = require('./db');

app.use("/user", userRouter)

app.get("/", (req,res) => {
    res.send("Welecome to Home Page")
})


app.listen(PORT,async () => {
    try{
        await connect
        console.log("Connected to database")
    }
    catch(err){
        console.log("Connection fail");
        console.log(err)
    }
console.log(`Server is running at ${PORT} port`)
}) 