import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Doctor Home
      </div>
      <ul className="sidebar-menu">
        <li><a href="/profile">Profile</a></li>
        <li><a href="/todo">To-Do List</a></li>
        <li><a href="/patients">Patients</a></li>
        {/* Add more custom items here */}
        <li><a href="/appointments">Appointments</a></li>
        <li><a href="/reports">Reports</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;

