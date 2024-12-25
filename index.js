const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



// Initialize app and environment
dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to DevWorks!");
});

const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//Connect MangoDB
mongoose.connect("mongodb://localhost/devworks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

