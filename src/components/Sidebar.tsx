// Sidebar.js
import './Sidebar.css'; // Create a CSS file for styling

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
