import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    totalResources: 0,
    totalPlacements: 0,
    recentResources: [],
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/dashboard"
      );

      setStats(response.data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>
            Welcome Back, {user?.name} 👋
          </h1>

          <p>
            Manage resources, placements and AI
            learning tools.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h4>Total Resources</h4>
            <h2>{stats.totalResources}</h2>
          </div>

          <div className="stat-card">
            <h4>Placement Experiences</h4>
            <h2>{stats.totalPlacements}</h2>
          </div>

          <div className="stat-card">
            <h4>Uploads</h4>
            <h2>{stats.totalResources}</h2>
          </div>

          <div className="stat-card">
            <h4>Community</h4>
            <h2>Active</h2>
          </div>
        </div>

        <div className="dashboard-bottom">
          <div className="recent-card">
            <h2>Recent Uploads</h2>

            <ul>
              {stats.recentResources.map(
                (item, index) => (
                  <li key={index}>
                    {item.title}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="recent-card">
            <h2>Popular Sections</h2>

            <ul>
              <li>📚 Resources</li>
              <li>💼 Placements</li>
              <li>📄 Previous Papers</li>
              <li>🤖 AI Assistant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;