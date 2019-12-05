var sql = require("./index.js");

function getDesc(req, res) {
  sql.query("SELECT * FROM `jobs`", function(error, results) {
    if (error) throw error;
    res.json(results);
  });
}

module.exports = getDesc;
