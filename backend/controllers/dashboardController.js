const db = require("../config/db");

const getDashboardStats = (req, res) => {
  const stats = {};

  db.query(
    "SELECT COUNT(*) AS totalResources FROM resources",
    (err, resourceResult) => {
      if (err) {
        return res.status(500).json({ success: false });
      }

      stats.totalResources =
        resourceResult[0].totalResources;

      db.query(
        "SELECT COUNT(*) AS totalPlacements FROM placements",
        (err, placementResult) => {
          if (err) {
            return res.status(500).json({ success: false });
          }

          stats.totalPlacements =
            placementResult[0].totalPlacements;

          db.query(
            "SELECT title FROM resources ORDER BY created_at DESC LIMIT 5",
            (err, recentResources) => {
              if (err) {
                return res.status(500).json({ success: false });
              }

              stats.recentResources =
                recentResources;

              res.json({
                success: true,
                stats,
              });
            }
          );
        }
      );
    }
  );
};

module.exports = {
  getDashboardStats,
};