import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src="" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#">img src={""} alt=""</a>
                <a href="#">img src={""} alt=""</a>
                <a href="#">img src={""} alt=""</a>
            </div>
            <button className="btn btn-outline-primary">Contact Me</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}