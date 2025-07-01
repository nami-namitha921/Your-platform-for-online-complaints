import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const TopNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: '#0D47A1' }} variant="dark">
      <Container>
        <Navbar.Brand>ResolveNow</Navbar.Brand>
        <ul className="navbar-nav d-flex flex-row gap-3">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link text-light">SignUp</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link text-light">Login</Link>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
