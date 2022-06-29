import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import '../../App.css';
// import SearchIcon from '../Img/Search.png';
import { Link } from 'react-router-dom'

function Header() {
  return (
      <div className='noknok-nav'>
          <Navbar expand='lg' className='header'>
              <Container>
                  <Navbar.Brand className='noknok-logo'><Link to='/'> <h4>Nok No<span style={{color:' orange'}}>k</span></h4></Link></Navbar.Brand>
                  <Navbar.Toggle/>
                  <Navbar.Collapse className='menu'>
                      <Nav className='mx-auto'>
                          <Nav.Link href='/GiveInterview'><p>Give Interview</p></Nav.Link>
                          <Nav.Link href='/GiveInterview'><p>Media House</p></Nav.Link>
                          <Nav.Link href='/ContactUs'><p>Contact Us</p></Nav.Link>
                      </Nav>
                      <Nav>
                          <Nav.Link>
                              {/* <img src={SearchIcon} alt='none' width={25}/> */}
                          </Nav.Link>
                          <NavDropdown title='Join Us' className='mx-3 text-center'>
                              <NavDropdown.Item className='dropD text-center'><Link to='/SignUp'><p>SignUp</p></Link></NavDropdown.Item>
                              <NavDropdown.Item className='dropD text-center'><Link to='/SignIn'><p>SignIn</p></Link></NavDropdown.Item>
                          </NavDropdown>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </div>
  )
}

export default Header;