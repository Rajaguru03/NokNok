import React from 'react';
import '../../App.css';
import { Container , Button , Col ,Row, InputGroup, FormControl, Carousel} from 'react-bootstrap';
import '../Animi.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ApiIcon from '@mui/icons-material/Api';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { ArrowRightAltOutlined } from '@mui/icons-material';
// import world from '../Img/WorldNokNok.png';
import Study from '../Img/Study.png';
import Header from './Header';
import { Link } from 'react-router-dom';

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
                <Button className='Ms-btn mx-3 my-3 py-2 px-5' variant='light' href='/GiveInterview'>Give Interviews</Button>
                <Button className='mx-3 my-3 py-2 px-5' variant="dark" href='#work' >About Us</Button>
              </div>
          </Container>
      </div>
      {/********************* Animi CSS *********************/}
      <div className='cricle1'></div>
      <div className='cricle2'></div>
      <div className='cricle3'></div>
      <Container>
        <div className='video' id='video'>
        {/* ******************  Video  ***************** */}
        </div>
      </Container>
      <div className='F-content'>
        {/* <ParallaxProvider>
          <ParallaxImg imgsrc={Group} height='500px'>
          
          </ParallaxImg>
        </ParallaxProvider>   */}
          <div className='title text-center' id='work'>
              <Container >
                <h1 style={{color:'orange'}}>How Simple works</h1>
                <p>Nok Nok is a Platform to Ask , Add and Create Interviews.<br/> Nok Nok is used to get some detailed informations about the interviews. In this Nok Nok Media House is the best thing to connect the user’s and public through link.</p>
              </Container>
              <div className='cricle2'></div>
          </div>
      </div>
      <div className='T-content' id='T-content'>
                <Row className='T-container'>
                  <Col sm={12} lg={7}>
                      <div className='T-heading'>
                          <h1 className='mb-3'>Powerful suite of tools</h1>
                          <p >Interviews can often follow a formulaic approach which means that candidates often face the same questions. This is especially true with experienced recruiters, who often feel confident enough in their interview skills to simply wing the interview, and consequently use the same tried and tested questions time and again.</p>
                      </div>
                      <div className='T-box '>
                        <div className='T text-center'>
                          <h4>Create Interviews</h4>
                          <p>Grow your knowledge by accpeting card paymment with the new card reader</p>
                        </div>
                        <div className='T-icon my-auto'>
                          <AcUnitIcon/>
                        </div>
                      </div>
                      <div className='T-box '>
                        <div className='T text-center'>
                          <h4>Media House</h4>
                          <p>Media House by default will have interview questions. They can also add question</p>
                        </div>
                        <div className='T-icon my-auto'>
                          <VideoLibraryIcon/>
                        </div>
                      </div>
                      <div className='T-box'>
                        <div className='T text-center'>
                            <h4>Create Interview </h4>
                            <p>Questionnaire can be created and the link can be shared to a person who is not in the platform</p>
                        </div>
                        <div className='T-icon my-auto'>
                          <ApiIcon/>
                        </div>
                      </div>
                  </Col>
                  <Col sm={12} md={12} lg={5} className='T-img p-5 d-flex justify-content-evenly'>
                    {/* Animi CSS */}
                      <img src={Study} alt='none' width={470} height={500}/>
                  </Col>
                </Row>
      </div>
      <div className='Solution'>
        <Container>
          <div className='S-title text-center'>
            <h1>Explore the solutions</h1>
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
            {/* <div className='G-img '>
              <img src={world} alt='none' width={800}/>
            </div>
            <div className='G-animi ping '>
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
              <Link to='/SignUp'>
                <p> Get started for free < ArrowRightAltOutlined/></p>
              </Link>
              </div>
            </Col>
          </Row>
            <hr/>
        </Container>
      </div>     
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
  </div>
  )
}

export default Content;