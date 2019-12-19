var sqlConnection = require("../index.js");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
var sessionStore = new MySQLStore(
  {} /* session store options */,
  sqlConnection
);

module.exports = {
  authorization(req, res, next) {
    console.log("The session on Request (Middleware): ", req.sessionID);

    var getSessionId = req.sessionID;
    sessionStore.get(getSessionId, (error, session) => {
      console.log("Inside session store: ", session);
      if (session) {
        console.log("The session Cookie is defined", session);
        res.json(true);
      } else {
        console.log("Session Cookie undeifined = ", session);
        next();
      }
    });
  },

  singleAuthorization(req, res) {
    console.log("The session on Request (Middleware): ", req.sessionID);

    var getSessionId = req.sessionID;
    sessionStore.get(getSessionId, (error, session) => {
      console.log("Inside session store: ", session);
      if (session) {
        console.log("The session Cookie is defined", session);
        res.json(true);
      } else {
        res.json(false);
      }
    });
  }
};
