import React from "react";
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Login from "./Login";
import News from "./News";
import Profile from "./Profile";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
    let isUserLoggedIn = localStorage.getItem('isUserLoggedIn')
    console.log(isUserLoggedIn)
    return (
        <Router className='content-wrapper'>
            <div className="content">
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/news' element={<News/>} />
                    <Route path='/profile' element={isUserLoggedIn ? <Profile/> : <Login/>} />
                </Routes>
            </div>
            <Footer/>
        </Router>  
    )
}

export default App;