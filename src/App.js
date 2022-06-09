import React from 'react';
import './App.css';
import Content from './components/HomePage/Content';
// import Header from './components/HomePage/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route, BrowserRouter } from 'react-router-dom';
import LogIn from './components/JoinUsPage/LogInPage/LogIn.jsx';
import SignUp from './components/JoinUsPage/SignUpPage/SignUp.jsx';
import GInterview from './components/HomePage/GInterview';
import CInterview from './components/HomePage/CInterview';
import ContactUs from './components/HomePage/ContactUs';
import AboutUs from './components/HomePage/AboutUs';
import Main from './components/Main/Main';
import MediaHouse from './components/Main/MediaHouse';

function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Header/>} /> */}
          <Route path='/' element={<Content/>} />
          <Route path='/SignIn' element={ <LogIn/> } />
          <Route path='/SignUp' element={ <SignUp/> } />
          <Route path='/GiveInterview' element={<GInterview/>} />
          <Route path='/CreateInterview' element={<CInterview/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Home' element={<Main/>}/>
          <Route path='/Home/MediaHouse' element={<MediaHouse/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  
  )
}

export default App