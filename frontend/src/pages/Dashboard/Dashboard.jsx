import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">

        <div className="dashboard-header">
          <h1>Welcome Back 👋</h1>
          <p>
            Manage resources, placements and AI learning tools.
          </p>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <h4>Total Resources</h4>
            <h2>250</h2>
          </div>

          <div className="stat-card">
            <h4>Downloads</h4>
            <h2>5.4K</h2>
          </div>

          <div className="stat-card">
            <h4>Uploads</h4>
            <h2>820</h2>
          </div>

          <div className="stat-card">
            <h4>Users</h4>
            <h2>1200</h2>
          </div>

        </div>

        <div className="dashboard-bottom">

          <div className="recent-card">
            <h2>Recent Uploads</h2>

            <ul>
              <li>DSP Notes.pdf</li>
              <li>DBMS PYQs.pdf</li>
              <li>React Handbook.pdf</li>
              <li>Amazon Interview Experience.pdf</li>
            </ul>
          </div>

          <div className="recent-card">
            <h2>Popular Categories</h2>

            <ul>
              <li>📚 Notes</li>
              <li>💻 Placement</li>
              <li>📄 Previous Papers</li>
              <li>🤖 AI Learning</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;