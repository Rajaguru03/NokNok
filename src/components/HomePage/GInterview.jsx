import React from 'react'
import '../../App.css'
import Header from './Header'
import '../Animi.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Table } from 'react-bootstrap'
import Footer from './Footer'

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
            {/* <hr/> */}
            <p className='my-4'>Below are some of the interview questions under various subjects. Please give your <br/>interview by answering the questions under each interview.</p>
          </div>
          {/* <h4>If you would like to create a public interview <Link to='/SignIn'>click here</Link></h4> */}
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
    <div className='interview-section py-5'>
      <Container>
        <div className='text-center mb-4'>
          <h1 style={{color:'orange'}}>Available Interviews</h1>
          <p>Browse through our collection of interviews</p>
        </div>
        <Table striped bordered hover responsive className='interview-table'>
          <thead>
            <tr>
              <th>Interview Title</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React Fundamentals</td>
              <td>Frontend Development</td>
              <td>Beginner</td>
              <td>30 mins</td>
            </tr>
            <tr>
              <td>Node.js Basics</td>
              <td>Backend Development</td>
              <td>Intermediate</td>
              <td>45 mins</td>
            </tr>
            <tr>
              <td>Data Structures</td>
              <td>Computer Science</td>
              <td>Advanced</td>
              <td>60 mins</td>
            </tr>
            <tr>
              <td>System Design</td>
              <td>Architecture</td>
              <td>Advanced</td>
              <td>90 mins</td>
            </tr>
            <tr>
              <td>JavaScript ES6+</td>
              <td>Programming</td>
              <td>Intermediate</td>
              <td>40 mins</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
    <div className='extra'></div>

    <Footer/>
    </>
  )
}

export default GInterview