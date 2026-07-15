const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const VolunteerModel = require("./models/VolunteerModel");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://athulkrishnapanamakkal:athul123@ac-pikpijl-shard-00-00.wjtqgxj.mongodb.net:27017,ac-pikpijl-shard-00-01.wjtqgxj.mongodb.net:27017,ac-pikpijl-shard-00-02.wjtqgxj.mongodb.net:27017/volunteerDb?ssl=true&replicaSet=atlas-a3e10y-shard-0&authSource=admin&appName=Cluster0");


// ADD Volunteer

app.post("/add", async (req, res) => {

    try {

        const volunteer = new VolunteerModel(req.body);

        await volunteer.save();

        res.json({
            status: "success",
            message: "Volunteer Added"
        });

    } catch (error) {

        res.json({
            status: "error",
            message: error
        });

    }

});




app.listen(3000, () => {

    console.log("Server Started");

});