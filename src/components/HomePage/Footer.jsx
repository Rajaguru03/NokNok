import React from 'react';
import '../../App.css';
import { Row , Col , Container , Button , FormControl , InputGroup  } from 'react-bootstrap';
import { ArrowRightAltOutlined } from '@mui/icons-material';

function Footer() {
  return (
    <>
    <div className='Footer'>
        <Container>
          <div className='Footer-content'>
            <Row>
              <Col xs={12} lg={3} >
                <h4>Nok No<span style={{color:'orange'}}>k</span></h4>
                <p>Terms ~ Privacy Policy</p>
              </Col>
              <Col xs={4} lg={2} >
                <h5>Product</h5>
                <p>Web studio</p>
                <p>DynamicBox Flex</p>
                <p>Programming Forms</p>
                <p>Integrations</p>
                <p>Command-line</p>
              </Col>
              <Col xs={4} lg={2}>
                <h5>Resources</h5>
                <p>Documentation</p>
                <p>Tutorials & Guides</p>
                <p>Blog</p>
                <p>Support Center</p>
                <p>Partners</p>
              </Col>
              <Col xs={4} lg={2}>
                <h5>Company</h5>
                <p>Home</p>
                <p>About us</p>
                <p>Company values</p>
                <p>Pricing</p>
                <p>Privacy Policy</p>
              </Col>
              <Col xs={12} lg={3}>
                <h5>Subscribe</h5>
                <p>Get the latest news and articles to your inbox every month.</p>
                <InputGroup>
                  <FormControl placeholder='Email id' />
                  <Button className='F-btn' variant='light'>
                    <ArrowRightAltOutlined/>
                  </Button>
                </InputGroup>
              </Col>
            </Row>
            <hr/>
            <div className='B-footer my-3'>
              <Row>
                <Col xs={6}>
                  <p>© 2022 Simple. All rights reserved.</p>
                </Col>
                <Col xs={6} className='d-flex justify-content-end'>
                  Social media
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer