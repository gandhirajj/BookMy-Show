import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/services';

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    dispatch(logout());
    navigate('/');
  };

  return (
    <Navbar className="app-navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="brand-logo">BMS</span> BookMyShow
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {user ? (
              <>
                <Nav.Link as={Link} to="/my-bookings" className="nav-link-custom">
                  My Bookings
                </Nav.Link>
                <Nav.Link className="nav-link-custom">Hi, {user.firstName}</Nav.Link>
                <Button
                  variant="outline-light"
                  onClick={handleLogout}
                  className="ms-2 btn-logout"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="nav-link-custom">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="nav-link-custom">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
