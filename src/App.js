import React from 'react';
import './App.css';
import Content from './components/HomePage/Content';
// import Header from './components/HomePage/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route, BrowserRouter } from 'react-router-dom';
import LogIn from './components/JoinUsPage/LogInPage/LogIn.jsx';
import SignUp from './components/JoinUsPage/SignUpPage/SignUp.jsx';
import GInterview from './components/HomePage/GInterview';
import ContactUs from './components/HomePage/ContactUs';
import Main from './components/Main/Main';
import MediaHouse from './components/Main/MediaHouse';
import MainGInterview from './components/Main/MainGInterview';
import MainCInterview from './components/Main/MainCInterview';
import AboutUs from './components/HomePage/AboutUs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Header/>} /> */}
          <Route path='/' element={<Content/>} />
          <Route path='/SignIn' element={ <LogIn/> } />
          <Route path='/SignUp' element={ <SignUp/> } />
          <Route path='/GiveInterview' element={<GInterview/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Main' element={<Main/>}/>
          <Route path='/MediaHouse' element={<MediaHouse/>}/>
          <Route path='/GInterview' element={<MainGInterview/>}/>
          <Route path='/CInterview' element={<MainCInterview/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  
  )
}

export default App