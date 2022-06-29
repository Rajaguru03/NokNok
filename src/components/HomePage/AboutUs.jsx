import React from 'react';
import '../../App.css';
import '../Animi.css';
import { Container , Row , Col , } from 'react-bootstrap';
import Header from './Header';
import Study from '../Img/Study.png';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Footer from './Footer';


function AboutUs() {
  return (
    <>
    <Header/>
    <div className='AboutUs'>
        <div className='AboutUsPage'>
            <div className='cricle1'></div>
            <div className='cricle2'></div>
        <Container>
            <div className='AboutUs_Title text-center my-5'>
                <h4>Just</h4>
                <h1>Nok Nok</h1>
                <h5>Your Brain To Gain More Knoweledge</h5>
            </div>
        </Container>
        </div>
        <div className='F-content'>
            <div className='title text-center' id='work'>
                <Container >
                    <h1 style={{color:'orange'}}>How Simple works</h1>
                    <p>Nok Nok is a Platform to Ask , Add and Create Interviews.<br/> Nok Nok is used to get some detailed informations about the interviews. In this Nok Nok Media House is the best thing to connect the user’s and public through link.</p>
                </Container>
            </div>
        </div>
        <div className='T-content' id='T-content'>
                <Row className='T-container'>
                  <Col sm={12} lg={7}>
                      <div className='T-heading'>
                          <h1 className='mb-3'>Powerful suite of tools</h1>
                          <p className='my-4' >Interviews can often follow a formulaic approach which means that candidates often face the same questions. This is especially true with experienced recruiters, who often feel confident enough in their interview skills to simply wing the interview, and consequently use the same tried and tested questions time and again.</p>
                      </div>
                      <div className='T-box mt-5'>
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
                  </Col>
                  <Col sm={12} md={12} lg={5} className='T-img p-5 d-flex justify-content-evenly'>
                    {/* Animi CSS */}
                      <img src={Study} alt='none' width={470} height={500}/>
                  </Col>
                </Row>
      </div>       
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs