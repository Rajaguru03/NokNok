import React from 'react';
import '../../App.css';
import { Container , Button , Col ,Row, Carousel} from 'react-bootstrap';
import '../Animi.css';
import ReactPlayer from "react-player"
import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ApiIcon from '@mui/icons-material/Api';
import { ArrowRightAltOutlined } from '@mui/icons-material';
// import world from '../Img/WorldNokNok.png';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Content() {
  return (
    <div>
      <Header/>
      <div className='content'>
          <Container>
              <div className='M-text text-center'>
                  <h2>Make your knowledge</h2>
                  <h1>wonderful</h1>
                  <p>Nok Nok is a Platform to Ask , Add and Create Interviews. <br/>Nok Nok is used to get some detailed informations about the interviews.</p>
              </div>
              <div className='M-btn text-center'>
                <Button className='Ms-btn mx-3 my-3 py-2 px-5' variant='light' href='/GiveInterview'>Give Interview</Button>
                <Button className='mx-3 my-3 py-2 px-5' variant="dark" href='/AboutUs' >About Us</Button>
              </div>
          </Container>
      </div>
      {/********************* Animi CSS *********************/}
      <div className='cricle1'></div>
      <div className='cricle2'></div>
      <div className='cricle3'></div>
      
      <div style={{width:'100%'}}>
        <Container>
        {/* ******************  Video  ***************** */}
        <ReactPlayer className='mx-auto video' id='video'
          url="https://www.youtube.com/watch?v=t0u6RgriZRY"
        /> 
        </Container>
      </div>
      
      <div  className='Solution'>
        <Container>
          <div className='S-title text-center'>
            <h1>Top Interviewers</h1>
            <p className='mt-3'>“Our task, regarding creativity, is to help children climb their own mountains,<br/>as high as possible. No one can do more.”</p>
          </div>
          <div>
            <Row>
              <Col  md={6} lg={4} className='con d-flex justify-content-evenly'>
                <div class="card">
                  <div class="slide slide1">
                      <div class="content">
                          <div class="icon">
                              <AcUnitIcon className='fa'/>
                          </div>
                      </div>
                  </div>
                  <div class="slide slide2">
                      <div class="content">
                          <h3>
                              Hello there!
                          </h3>
                          <p>Trust yourself and keep going.</p>
                      </div>
                  </div>
                  </div>
              </Col>
              <Col  md={6} lg={4} className='d-flex justify-content-evenly'>
              <div class="card">
                  <div class="slide slide1">
                      <div class="content">
                          <div class="icon">
                              <AcUnitIcon className='fa'/>
                          </div>
                      </div>
                  </div>
                  <div class="slide slide2">
                      <div class="content">
                          <h3>
                              Hello there!
                          </h3>
                          <p>Trust yourself and keep going.</p>
                      </div>
                  </div>
                  </div>
              </Col>
              <Col  md={12} lg={4} className='d-flex justify-content-evenly'>
              <div class="card">
                  <div class="slide slide1">
                      <div class="content">
                          <div class="icon">
                              <AcUnitIcon className='fa'/>
                          </div>
                      </div>
                  </div>
                  <div class="slide slide2">
                      <div class="content">
                          <h3>
                              Hello there!
                          </h3>
                          <p>Trust yourself and keep going.</p>
                      </div>
                  </div>
                  </div>
              </Col>
            </Row>      
          </div>
        </Container>
      </div>
      <div className='Education text-center '>
            <div>
              <h1 className='my-5'> Top Interview </h1>
            </div>
            <Row>
              <Col sm={6} md={6} lg={3} className='my-3 d-flex justify-content-evenly'>
                <Link to='/SignIn' class="cards education">
                    <div class="overlay mx-auto"></div>
                  <div class="circle">
                    {/* Animiated circle */}
                  </div>
                  <p>Education</p>
                </Link>
              </Col>
              <Col sm={6} md={6} lg={3} className='my-3 d-flex justify-content-evenly'>
                <Link to='/SignIn' class="cards education">
                    <div class="overlay"></div>
                  <div class="circle">
                    {/* Animiated circle */}
                  </div>
                  <p>Education</p>
                </Link>
              </Col>
              <Col sm={6} md={6} lg={3} className='my-3 d-flex justify-content-evenly'>
                <Link to='/SignIn' class="cards education">
                    <div class="overlay"></div>
                  <div class="circle">
                    {/* Animiated circle */}
                  </div>
                  <p>Education</p>
                </Link>
              </Col>
              <Col sm={6} md={6} lg={3} className='my-3 d-flex justify-content-evenly'>
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
      <div id='MediaHouse' className='Solution'>
        <Container>
          <div className='S-title text-center'>
            <h1>Media House</h1>
            <p className='mt-5'>“Our task, regarding creativity, is to help children climb their own mountains,<br/>as high as possible. No one can do more.”</p>
          </div>
          <div>
            <Row>
              <Col  md={6} lg={4} className='con d-flex justify-content-evenly'>
                <div class="card">
                  <div class="slide slide1">
                      <div class="content">
                          <div class="icon">
                              <AcUnitIcon className='fa'/>
                          </div>
                      </div>
                  </div>
                  <div class="slide slide2">
                      <div class="content">
                          <h3>
                              Hello there!
                          </h3>
                          <p>Trust yourself and keep going.</p>
                      </div>
                  </div>
                  </div>
              </Col>
              <Col  md={6} lg={4} className='d-flex justify-content-evenly'>
              <div class="card">
                  <div class="slide slide1">
                      <div class="content">
                          <div class="icon">
                              <AcUnitIcon className='fa'/>
                          </div>
                      </div>
                  </div>
                  <div class="slide slide2">
                      <div class="content">
                          <h3>
                              Hello there!
                          </h3>
                          <p>Trust yourself and keep going.</p>
                      </div>
                  </div>
                  </div>
              </Col>
              <Col  md={12} lg={4} className='d-flex justify-content-evenly'>
              <div class="card">
                  <div class="slide slide1">
                      <div class="content">
                          <div class="icon">
                              <AcUnitIcon className='fa'/>
                          </div>
                      </div>
                  </div>
                  <div class="slide slide2">
                      <div class="content">
                          <h3>
                              Hello there!
                          </h3>
                          <p>Trust yourself and keep going.</p>
                      </div>
                  </div>
                  </div>
              </Col>
            </Row>      
          </div>
        </Container>
        
      </div>
      <div className='G-content'>
        <div className='G-title'>
          <h1>Simple can help you scale<br/> internationally</h1>
          <p>Education helps us get exposure to new ideas and concepts that we can use to appreciate and<br/>improve the world around us and the world within us.</p>
        </div>
        <div className='G'>
          <Container>
            {/* <div >
              <img className='G-img mx-auto' src={world} alt='none'/>
            </div>
            <div className='G-animi ping text-center'>
            </div> */}
          </Container>
        </div>
      </div>
      {/* ************************ Testimonials ***************************** */}

      <div className='Testimonials'>
        <div className='Testi-title text-center'>
          <h1>Testimonials</h1>
        </div>
        <Carousel variant="dark">
          <Carousel.Item>
            <div className='Testi-slider'></div>
            <Carousel.Caption>
              <h5>First slide</h5>
              <p className='my-5'>An interview is a structured conversation where one participant<br/> asks questions, and the other provides answers.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='Testi-slider'></div>
              <Carousel.Caption>
                <h5>Second slide</h5>
                <p className='my-5'>No matter what happens, use it as an experience to grow from. Best of luck!</p>
              </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item>
            <div className='Testi-slider'></div>
            <Carousel.Caption>
              <h5>Third slide</h5>
              <p className='my-5'>As you go into this interview, understand that fate is in your hands. Believe in yourself and your potential and success shall be yours.<br/> Good luck, my friend!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='Enter my-5'>
        <Container>
          <Row className='E-content mx-auto'>
            <Col xs={12} md={8} className='E-text'>
              <h1>Ready to get started?</h1>
              <p>We have a generous free tier available to get you started right away.</p>
            </Col>
            <Col  md={4} className='d-flex justify-content-end'>

              <div className='E-btn text-center'>
              <Link to='/SignIn'>
                <p> Get started for free < ArrowRightAltOutlined/></p>
              </Link>
              </div>
            </Col>
          </Row>
            <hr/>
        </Container>
      </div>     
      <Footer/>
  </div>
  )
}

export default Content;