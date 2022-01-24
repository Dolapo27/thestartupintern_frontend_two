import React from 'react'
import Headertwo from "../components/Headertwo"
import "../styles/Fifthpage.css"

function Fifthpage() {
    return (
        <div className='Fifth'>
            <Headertwo />
            <div className='container Fifthpart'>

            <div className="form-group fifth-form">
                    <label className='future' htmlFor="date">Date in the future</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="Title">Title</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="Details">Details</label>
                </div>
                <div>
                    <textarea name="" id="" cols="50" rows="10"></textarea>
                </div>
                <button className='btn-save'>Update</button> 
            </div>
            
        </div>
    )
}

export default Fifthpage
