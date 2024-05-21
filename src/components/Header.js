import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Header() {
  return (
    <div>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Link className='text-decoration-none' to={'/'}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/022/354/148/non_2x/3d-illustration-recipe-book-in-kitchen-set-png.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            TASTY BUDS
           
          </Navbar.Brand>
          </Link>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      
        </Container>
      </Navbar>
 
    </div>
  )
}

export default Header