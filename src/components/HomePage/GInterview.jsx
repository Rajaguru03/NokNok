import React from 'react'
import '../../App.css'
import Header from './Header'
import '../Animi.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function GInterview() {
  return (
    <>
    <Header/>
    <div className='cricle1'></div>
    <div className='cricle2'></div>
    <div className='GInterview'>
      <div className='GTitle text-center'>
          <div className='Gbox'>
            <h3>TOP INTERVIEWS</h3>
          </div>
          <div>
            <h1> Give Your Interview </h1>
            <hr/>
            <p className='my-4'>Below are some of the interview questions under various subjects. Please give your <br/>interview by answering the questions under each interview.</p>
          </div>
          <h4>If you would like to create a public interview <Link to='/SignIn'>click here</Link></h4>
      </div>
      <div className='GContent'>
        <Container>
          <div className='GTrendHeading'>
            <h4>Top Trend Interview</h4>
          </div>
          <div>
            <Row>
              <Col sm={6} md={4} lg={3} className='d-flex justify-content-evenly'>
                <Link to='/SignIn' class="cards education">
                    <div class="overlay"></div>
                  <div class="circle">
                    {/* Animiated circle */}
                  </div>
                  <p>Education</p>
                </Link>
              </Col>
              <Col sm={6} md={4} lg={3} className='d-flex justify-content-evenly'>
                <Link to='/SignIn' class="cards education">
                    <div class="overlay"></div>
                  <div class="circle">
                    {/* Animiated circle */}
                  </div>
                  <p>Education</p>
                </Link>
              </Col>
              <Col sm={6} md={4} lg={3} className='d-flex justify-content-evenly'>
                <Link to='/SignIn' class="cards education">
                    <div class="overlay"></div>
                  <div class="circle">
                    {/* Animiated circle */}
                  </div>
                  <p>Education</p>
                </Link>
              </Col>
              <Col sm={6} md={4} lg={3} className='d-flex justify-content-evenly'>
                <Link to='/SignIn' class="cards education">
                    <div class="overlay"></div>
                  <div class="circle">
                    {/* Animiated circle */}
                  </div>
                  <p>Education</p>
                </Link>
              </Col>
            </Row>
          </div>
          
        </Container>
      </div>
    </div>
    </>
  )
}

export default GInterview