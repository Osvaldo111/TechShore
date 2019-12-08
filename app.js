var createError = require("http-errors");
var express = require("express");
var path = require("path");
var app = express();
var DBJobDesc = require("./server/DB/jobDesc.js");
// var sql = require("./index.js");

// // Parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); //for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/getJobDescription", DBJobDesc);

app.post("/api", function(req, res) {
  // var job_id = req.body.example;
  // sql.query("SELECT 'id' FROM `jobs` WHERE 'id' = ?", [job_id], function(
  //   error,
  //   results
  // ) {
  //   if (error) throw error;
  //   res.json(results);
  // });
  console.log(req.body.example);
});
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
