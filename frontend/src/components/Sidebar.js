import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUser, FaTools, FaSignOutAlt, FaTasks, FaBell, FaChartBar, FaCube, FaListAlt } from 'react-icons/fa'; // ✅ Added FaListAlt icon for Todos

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-light" style={{ width: '200px', height: '100vh' }}>
      <div className="bg-primary text-white text-center py-4">
        <h2>Actions</h2>
      </div>
      <Nav className="flex-column p-3">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            <FaHome className="me-2" /> Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/projects">
            <FaProjectDiagram className="me-2" /> Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/tasks">
            <FaTasks className="me-2" /> Tasks
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/resources">
            <FaTools className="me-2" /> Resources
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/users">
            <FaUser className="me-2" /> Users
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/reports">
            <FaChartBar className="me-2" /> Reports
          </Nav.Link>
        </Nav.Item>

        {/* Floorplanner Editor Menu */}
        <Nav.Item>
          <Nav.Link as={Link} to="/floorplanner-editor">
            <FaCube className="me-2" /> Floorplanner
          </Nav.Link>
        </Nav.Item>

        {/* ✅ New Todos Menu */}
        {/* <Nav.Item>
          <Nav.Link as={Link} to="/todos">
            <FaListAlt className="me-2" /> Todos
          </Nav.Link>
        </Nav.Item> */}

        {/* Logout */}
        <Nav.Item className="mt-auto">
          <Nav.Link as={Link} to="/logout" className="text-danger">
            <FaSignOutAlt className="me-2" /> Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
