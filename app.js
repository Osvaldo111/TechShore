var createError = require("http-errors");
var express = require("express");
var path = require("path");
var app = express();
var DBMethods = require("./server/DB/jobDesc.js");
var sqlConnection = require("./server/DB/index.js");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
var sessionStore = new MySQLStore(
  {} /* session store options */,
  sqlConnection
);
const SESSION_NAME = "sid";
const COOKIE_LIFETIME = 1000 * 60; //20 Minutes
app.use(
  session({
    name: SESSION_NAME,
    resave: false,
    saveUninitialized: false,
    secret: "session_cookie_secret",
    store: sessionStore,
    cookie: {
      maxAge: COOKIE_LIFETIME
    }
  })
);

// This is use for production
var sess = {
  secret: "keyboard cat",
  cookie: {}
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); //for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "client/build")));

app.post("/api/getJobs", function(req, res) {
  req.session.userId = 1;
  console.log("The session element", req.session.userId);
  // req.session.destroy();
  // res.clearCookie(SESSION_NAME, { path: "/" });
  DBMethods.getJobs(req, res, sqlConnection);
});

app.post("/api/getJobDescription", function(req, res) {
  DBMethods.getJobDesc(req, res, sqlConnection);
});

app.get("/api/storeJobs", function(req, res) {
  DBMethods.storejobsDB(req, res, sqlConnection);
});

app.post("/api/login", function(req, res) {
  DBMethods.getCredentialsLogIn(req, res, sqlConnection);
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
