import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logo } from '../../asset/img/dev-logo.jpg'
const Header = () => {

  return (
    <div className='d-flex flex-column bd-highlight mb-3'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">

            <span>YangKang</span>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Trang Chủ</Nav.Link>
              <Nav.Link href="#link"></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Menu</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">

                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
