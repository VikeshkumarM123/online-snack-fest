import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Link} from 'react-router-dom';
export default function Navigationbar() {
  return (
        <Navbar  sticky="top"data-bs-theme='dark' expand="lg" className="bg-danger"style={{height:'60px', fontSize:'medium'}}>
          <Container fluid>
            <Navbar.Brand href="/">
            <img
              src="snack.png" 
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo" style={{borderRadius:'50%'}}/>  E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px'}}
                navbarScroll>
                <ButtonGroup aria-label="Basic example">
                <Nav.Link as={Link} to="/"><Button variant="secondary" className="btn btn .btn-primary:hover"style={{background:'white',color:'black',borderColor:'black'}}>Home</Button></Nav.Link>
                <Nav.Link as={Link} to="/About"><Button variant="secondary"style={{background:'white',color:'black',borderColor:'black'}}>About</Button></Nav.Link>
                </ButtonGroup>
                <Button style={{backgroundColor:'black',color:'white',borderColor:'black'}}><NavDropdown title="More" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/SignIn">Sign In</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Login">Login</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/Contact">
                   Contact Page
                  </NavDropdown.Item>
                </NavDropdown>
                </Button>
                <Nav.Link as={Link} to="/Login"><Button variant="secondary"style={{background:'white',color:'black',borderColor:'black'}}>Login</Button></Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onFocus={(e) => {
                    e.target.style.borderColor = 'white';
                    e.target.style.boxShadow = '0 0 5px white'; 
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'black';
                    e.target.style.boxShadow = 'none'; 
                  }}
                />
                <Button variant="outline-success" className='bg-white text-black'>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
