var sql = require("./index.js");

module.exports = {
  /*Send data of all the jobs selected*/
  getJobs(req, res) {
    sql.query("SELECT * FROM `jobs`", function(error, results) {
      if (error) throw error;
      res.json(results);
    });
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
