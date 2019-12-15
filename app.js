var createError = require("http-errors");
var express = require("express");
var path = require("path");
var app = express();
var DBMethods = require("./server/DB/jobDesc.js");
var session = require("express-session");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); //for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  session({ secret: "Some Key", resave: false, saveUninitialized: true })
);

app.post("/api/getJobs", DBMethods.getJobs);

app.post("/api/getJobDescription", DBMethods.getJobDesc);

app.get("/api/storeJobs", DBMethods.storejobsDB);

app.post("/api/login", DBMethods.getCredentialsLogIn);

// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port);
