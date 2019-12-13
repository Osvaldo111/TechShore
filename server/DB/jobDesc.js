var sql = require("./index.js");
var request = require("request");
var parseString = require("xml2js").parseString;

module.exports = {
  /*Send data of all the jobs selected*/
  getJobs(req, res) {
    var link =
      "https://stackoverflow.com/jobs/feed?l=Mexico+City%2c+CDMX%2c+Mexico&u=Km&d=5";
    request(link, function(error, response, body) {
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      // console.log("body:", body); // Print the HTML for the Google homepage.
      parseString(body, function(err, result) {
        console.dir(result.rss.channel[0].item);
        res.json(result.rss.channel[0].item);
      });
      // res.json(body);
    });

    var searchJobKeyWord = "%" + req.body.keyword + "%";
    console.log("Job keyword: ", searchJobKeyWord);
    sql.query(
      "SELECT * FROM `jobs` WHERE job_position LIKE ?",
      [searchJobKeyWord],
      function(error, results) {
        if (error) throw error;
        // res.json(results);
      }
    );
  },

  /*Send the description of a specific job */
  getJobDesc(req, res) {
    var job_id = req.body.example;
    console.log(job_id);
    sql.query("SELECT * FROM jobs WHERE id = ?", [job_id], function(
      error,
      results
    ) {
      if (error) throw error;
      res.json(results);
      console.log("This is the results: ", results);
    });
  }
};
