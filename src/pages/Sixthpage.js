import React from 'react'
import Header from "../components/Header"
import "../styles/Sixthpage.css"



function Sixthpage() {
    return (
        <div className='Sixth'>
            <Header />
            <div className='container Sixthpart text-center'>
                <h1 className='Sixthh1'>Create an account,</h1>
                <div align = "center" >
                    <div className="form-group4">
                        <label htmlFor="name">Fullname</label>
                        <input type="text" />
                    </div>
                    <div className="form-group4">
                        <label htmlFor="Email">Email</label>
                        <input type="email" />
                    </div>
                    <div className="form-group4">
                        <label htmlFor="Password">Password</label>
                        <input type="password" />
                    </div>
                </div>
               <div className='text-center'><button className='btn-create'>Create</button></div>
               
            </div>
            
        </div>
    )
}

export default Sixthpage
