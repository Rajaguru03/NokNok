import React from 'react';
import './Main.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';


function MainHeader() {
  return (
    <div>
      <Navbar expand='lg' className='header'>
              <Container>
                  <Navbar.Brand href='#' ><h4>Nok No<span style={{color:' orange'}}>k</span></h4></Navbar.Brand>
                  <Navbar.Toggle/>
                  <Navbar.Collapse className='head'>
                      <Nav className='mx-auto'>
                          <Nav.Link><p>Give your interview</p></Nav.Link>
                          <Nav.Link><p>Create interview</p></Nav.Link>
                          <Nav.Link href='/Home/MediaHouse'><p>Media House</p></Nav.Link>
                      </Nav>
                      <Nav>
                          <Nav.Link>
                              <Link to='/'><p style={{color:'orange'}} >Logout</p></Link>
                          </Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
        </Navbar>
    </div>
  )
}

export default MainHeader