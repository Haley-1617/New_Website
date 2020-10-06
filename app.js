require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://admin-haley:" + process.env.PW + "@cluster0.kqahy.mongodb.net/myProjectDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const projectsSchema = {
    videoID: String,
    title: String,
    description: String,
    date: String,
    tags: String,
    type: String
}

const Project = mongoose.model("Project", projectsSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/portfolio", (req, res) => {
    Project.find({}, (err, foundItems) => {
        res.render("card", { cards: foundItems })
    })
})

// app.get("/upload", (req, res) => {
//     res.render("upload.ejs")
// })

// app.post("/upload", (req, res) => {
//     const project = new Project({
//         videoID: req.body.videoID,
//         title: req.body.title,
//         description: req.body.description,
//         date: req.body.date,
//         tags: req.body.tags,
//         type: req.body.type
//     })
//     project.save()
//     res.redirect("/");
// })

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000...");
})