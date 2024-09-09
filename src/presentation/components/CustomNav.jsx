import { Component } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./CustomNav.css";
import MainButton from "../ui/MainButton";
export default class CustomNav extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" className="custom-nav fixed-top">
          <Container className="">
            <Navbar.Brand href="#home">
              <img src="/src/assets/brand.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
              <MainButton value={"Hire Me"} className='' />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
