import React from 'react'
import Header from './MainHeader'
import { Col, Row} from 'react-bootstrap';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';



function Main() {
  return (
    <div className='Main'>
      <Header/>
      <Row className='MainRow'>
        <Col xs={6} className='d-flex justify-content-evenly Home'>
          <div className='HomeSections'>
            <div className='Home-H text-center my-3'>
              <h3>Listening Every <span style={{color:'orange'}}>Interviews</span></h3>
              <p>Explore Millions of Intreviews acccoding to your taste</p>
            </div>
            <div className='searchbar'>
              {/* ************ Search Bar **************** */}
              <p>Search Bar</p>
              <div className='SearchIcon'>
                <SearchSharpIcon/>            
              </div>
            </div>
            <div className='postSection'>
              
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Main