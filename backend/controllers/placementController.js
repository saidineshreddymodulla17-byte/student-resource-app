const db = require("../config/db");

const addExperience = (req, res) => {
  const {
    company,
    role,
    experience,
    author,
  } = req.body;

  const sql =
    "INSERT INTO placements (company, role, experience, author) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [company, role, experience, author],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Experience added successfully",
      });
    }
  );
};

const getExperiences = (req, res) => {
  db.query(
    "SELECT * FROM placements ORDER BY created_at DESC",
    (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.status(200).json({
        success: true,
        experiences: results,
      });
    }
  );
};

module.exports = {
  addExperience,
  getExperiences,
};