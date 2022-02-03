require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");

//custom imports
const resumeRoutes = require("./routes/resume");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

// views --> the directory where the template files are located.
app.set("views", "./views");

// view engine --> the template engine to use
app.set("view engine", "pug");

const PORT = process.env.APP_PORT;

//DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED...");
  })
  .catch((err) => {
    console.log(err);
  });

//setting /api as default route of all routes available inside resumeRoutes
// app.use("/api", resumeRoutes);
app.use(resumeRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port number ", PORT);
});
