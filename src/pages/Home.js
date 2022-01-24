import React from 'react'
import "../styles/Home.css"
import Header from "../components/Header"
import { Link } from 'react-router-dom'



function Home() {
    return (
        
        <div className='Homepage' >
            <Header />
            <div className='home text-center' >
                <h1 className='homeh1'>Welcome back,</h1>
                <p className='homepara'>Hi, my name is Eventful moments, I am a bucket...no, not the
                    bucket of water but i store awesome moments you will like to have
                    in coming years. 
                </p>
                <div align = "center">
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" />
                    </div>
                    <Link to="/Secondpage">
                        <button className='btn-home'>Login</button>
                    </Link>
                    
            
                </div>
               
             
            </div>
            
           
            
        </div>
    )
}

export default Home
