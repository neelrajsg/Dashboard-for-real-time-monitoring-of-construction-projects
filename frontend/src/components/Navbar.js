import React from 'react';
import { Navbar, Nav, Container, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaUserCircle, FaCog, FaSignOutAlt, FaHome, FaProjectDiagram,
  FaUser, FaTools, FaTasks, FaBell, FaChartBar, FaCube
} from 'react-icons/fa';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3 px-4" >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Dashboard for real-time monitoring of construction projects - COM08
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><FaHome className="me-2" />Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/projects"><FaProjectDiagram className="me-2" />Projects</Nav.Link>
            <Nav.Link as={Link} to="/tasks"><FaTasks className="me-2" />Tasks</Nav.Link>
            <Nav.Link as={Link} to="/resources"><FaTools className="me-2" />Resources</Nav.Link>
            <Nav.Link as={Link} to="/users"><FaUser className="me-2" />Users</Nav.Link>
            <Nav.Link as={Link} to="/reports"><FaChartBar className="me-2" />Reports</Nav.Link>
            <Nav.Link as={Link} to="/floorplanner-editor"><FaCube className="me-2" />Floorplanner</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <FaUserCircle size={20} className="me-2" /> Account
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">
                  <FaUserCircle className="me-2" /> Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/settings">
                  <FaCog className="me-2" /> Settings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/logout" className="text-danger">
                  <FaSignOutAlt className="me-2" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
