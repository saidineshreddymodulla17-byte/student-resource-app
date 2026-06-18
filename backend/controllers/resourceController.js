const db = require("../config/db");
const fs = require("fs");
const path = require("path");

const uploadResource = (req, res) => {
  const { title, subject, uploaded_by } = req.body;

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  const fileName = req.file.filename;

  const sql =
    "INSERT INTO resources (title, subject, file_name, uploaded_by) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [title, subject, fileName, uploaded_by],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Resource uploaded successfully",
      });
    }
  );
};

const getResources = (req, res) => {
  db.query(
    "SELECT * FROM resources ORDER BY created_at DESC",
    (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.status(200).json({
        success: true,
        resources: results,
      });
    }
  );
};

const deleteResource = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM resources WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      if (results.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Resource not found",
        });
      }

      const fileName = results[0].file_name;

      const filePath = path.join(
        __dirname,
        "../uploads",
        fileName
      );

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      db.query(
        "DELETE FROM resources WHERE id = ?",
        [id],
        (err) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          res.status(200).json({
            success: true,
            message: "Resource deleted successfully",
          });
        }
      );
    }
  );
};

module.exports = {
  uploadResource,
  getResources,
  deleteResource,
};