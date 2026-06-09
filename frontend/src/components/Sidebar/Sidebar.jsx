import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <Link to="/dashboard" className="sidebar-logo">
        🎓 StudentHub
      </Link>

      <ul className="sidebar-menu">

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/resources">
            Resources
          </Link>
        </li>

        <li>
          <Link to="/upload">
            Upload
          </Link>
        </li>

        <li>
          <Link to="/placement">
            Placement Prep
          </Link>
        </li>

        <li>
          <Link to="/ai-assistant">
            AI Assistant
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;