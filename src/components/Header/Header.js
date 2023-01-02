import React from 'react';
import ContextData from '../../handlers/context.js';

import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const {setSearch} = React.useContext(ContextData);

  const handleChange = (event)=>{
    console.log(event.target.value);
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
    <Navbar bg="default" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Te Recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">About</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">Deliciosas</NavDropdown.Item>
              <NavDropdown.Item href="/category/clasicas">
                  Clásicas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Rápidas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form onSubmit={(e)=>{e.preventDefault()}} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Tortilla de patatas..."
              className="me-2"
              aria-label="title"
              onChange={handleChange}
            />
             <Link to={"/search"}>
              <Button variant="primary">
                Buscar
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;