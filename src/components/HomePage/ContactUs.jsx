import React from 'react';
import '../Animi.css';
import '../../App.css';
import Header from './Header';
import {Col, Container, Row} from 'react-bootstrap';
import { Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import Iframe from 'react-iframe';


function ContactUs() {
  return (
    <>
    <Header/>
      <Container>
        <div className='cricle1'></div>
        <div className='cricle2'></div>
        <div className='contactUs'>

        <div class="container">
        <div class="form-container">
            <div class="left-container">
            <div class="left-inner-container">
                <h2>Let's Chat</h2>
                <p>Whether you have a question, want to start a project or simply want to connect.</p>
                <p>Feel free to send me a message in the contact form</p>
                <Instagram className='mx-3 my-4'/>
                <LinkedIn className='mx-3 my-4'/>
                <Twitter className='mx-3 my-4'/>
            </div>
            </div>
            <div class="right-container">
            <div class="right-inner-container">
                <form action="#">
                    <h2 class="lg-view">Contact</h2>
                    <h2 class="sm-view">Let's Chat</h2>
                    <br/>
                    <input type="text" placeholder="Name *"  />
                    <input type="email" placeholder="Email *" />
                    <input type="phone" placeholder="Phone" />
                    <textarea rows="4" placeholder="Message"></textarea>
                    <button className='C-btn my-4'>Submit</button>
                </form>
            </div>
            </div>
        </div>
        </div>
                                
            
            <div className="map_sec">
                <Container >
                    <Row>
                        <Col md={10} className="offset-md-1">
                            <div className="map_inner">
                                <h4>Find Us on Google Map</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                                <div className="map_bind">
                                   <Iframe url='https://www.google.com/maps' width='100%' height='500px' className='mx-auto'/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

  
        </div>
      </Container>
    </>
  )
}

export default ContactUs


// <div className="contact_us text-center">
            
// <Row>
  
//     <Col md={11} lg={10} className=" offset-md-1">

//         <div className="contact_inner ">
        
//             <Row>
//                 <Col>
//                     <div className="contact_form_inner  ">
//                         <div className="contact_field " >
//                           <h3>Contact Us</h3>
//                           <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                            
//                             <input type="text" className="form-control form-group" placeholder="Name" />
//                             <input type="text" className="form-control form-group" placeholder="Email" />
//                             <textarea className="form-control form-group" placeholder="Message"></textarea>
//                             <button className="contact_form_submit">Send</button>
//                         </div>
//                     </div>
//                 </Col>
//                 <Col className="col-md-2">
//                     <div className="right_conatct_social_icon d-flex align-items-end">
//                       <div className="socil_item_inner">
//                           <Instagram className='mx-1'/>
//                           <LinkedIn className='mx-1'/>
//                           <Twitter className='mx-1'/>
//                       </div>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     </Col>
// </Row>
// </div>