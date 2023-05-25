import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../asset/img/dev-logo.jpg'
import { NavLink } from 'react-router-dom';
import '../header/Header.scss'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
const Header = ({ onClickHideOrShow }) => {
  const [hideSlider, setHideSlider] = useState(false);

  const handleUpdateHide = (event) => {
    event.preventDefault();
    setHideSlider(false);
    onClickHideOrShow(hideSlider);
  }

  const handleUpdateShow = (event) => {
    event.preventDefault();
    setHideSlider(true);
    onClickHideOrShow(hideSlider);
  }

  return (
    <div className='d-sm-flex flex-sm-column bd-highlight mb-3'>
      <Navbar bg="light" expand="lg">
        <Container>
        <div className='hide-show'>
            {hideSlider === true ?
              <Button
                className='hideSlider'
                variant=""
                onClick={handleUpdateHide}
              >
                <i class="fa-solid fa-grip-lines"></i>&nbsp;
              </Button>
              :
              <Button
                className='showSlider'
                variant=""
                onClick={handleUpdateShow}
              >
                <i class="fa-solid fa-grip-lines-vertical"></i>&nbsp;
              </Button>
            }
          </div>
          <NavLink to={"/home"} className={"nav-link"}>
            <Navbar.Brand>
              <img
                src={logo}
                width={"30"}
                height={"30"}
                className='d-inline-block align-top'
                alt="YangKangLogo"
              />
              <span>YangKang</span>
            </Navbar.Brand>
          </NavLink>





          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to={"/home"} className={"nav-link"} >HomePage</NavLink>
              <NavLink to={"/menu"} className={"nav-link"} >Menu</NavLink>
              <NavLink to={"/combo"} className={"nav-link"} >Combo</NavLink>
              <NavLink to={"/order"} className={"nav-link"} >Order</NavLink>
            </Nav>
            <Nav>
              <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to={"/login"} className={"nav-link"} >Login</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to={"/register"} className={"nav-link"} >Register</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to={"/logout"} className={"nav-link"} >LogOut</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to={"/change-password"} className={"nav-link"} >Change Password</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </div >
  )
}

export default Header
