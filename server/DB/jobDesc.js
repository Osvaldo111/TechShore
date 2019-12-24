var request = require("request");
var parseString = require("xml2js").parseString;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = {
  /*Send data of all the jobs selected*/
  getJobs(req, res, sqlConnection) {
    var searchJobKeyWord = "%" + req.body.keyword + "%";
    sqlConnection.query(
      "SELECT * FROM `stackODaily` WHERE job_position LIKE ?",
      [searchJobKeyWord],
      function(error, results) {
        if (error) throw error;
        res.json(results);
      }
    );
  },

  /*Send the description of a specific job */
  getJobDesc(req, res, sqlConnection) {
    var job_id = req.body.example;
    sqlConnection.query(
      "SELECT * FROM stackoDaily WHERE id = ?",
      [job_id],
      function(error, results) {
        if (error) throw error;
        res.json(results);
        // console.log("This is the results: ", results);
      }
    );
  },

  storejobsDB(req, res, sqlConnection) {
    var link = "https://stackoverflow.com/jobs/feed?r=true";
    request(link, function(error, response, body) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      parseString(body, function(err, result) {
        var stackOverflowJobs = result.rss.channel[0].item;
        var jobsToStoreDB = [];

        for (let index = 0; index < stackOverflowJobs.length; index++) {
          // Remove all the entities and HTML tags from the de
          const copyofDescrStackOv = new JSDOM(
            stackOverflowJobs[index].description
          );
          stackOverflowJobs[
            index
          ].description = copyofDescrStackOv.window.document.querySelector(
            "body"
          ).textContent;

          // Parse the Date according to the DB Format.
          var mydate = new Date(stackOverflowJobs[index].pubDate);
          var newDate =
            mydate.getFullYear() +
            "-" +
            (mydate.getMonth() + 1) +
            "-" +
            mydate.getDate();

          // Remove the extra text "()" and "(allows remote)"
          var job_position = stackOverflowJobs[index].title
            .toString()
            .replace("()", "")
            .replace("(allows remote)", "");

          var jobs = {
            id: 0,
            job_position: job_position,
            company_name: stackOverflowJobs[index]["a10:author"][0]["a10:name"],
            date_posted: newDate,
            job_hours: "Full-Time",
            job_location: "Remote",
            job_description: stackOverflowJobs[index].description,
            job_link: stackOverflowJobs[index].link
          };

          sqlConnection.query("INSERT INTO stackODaily SET ?", jobs, function(
            error,
            results
          ) {
            if (error) throw error;
          });
          jobsToStoreDB.push(stackOverflowJobs[index].link);
        }

        res.json(jobsToStoreDB /*[0].description*/);
      });
    });
  },

  getCredentialsLogIn(req, res, sqlConnection, sessionStore) {
    var credentials = req.body.credentials;

    sqlConnection.query(
      "SELECT user FROM users WHERE user = ? AND user_password = ?",
      [credentials.username, credentials.password],
      function(error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
          req.session.user = results[0].user;
          // console.log(results[0].user);
          res.json(true);
        } else {
          res.json(false);
          // console.log("invalid Credentials");
        }
      }
    );
  }
};
