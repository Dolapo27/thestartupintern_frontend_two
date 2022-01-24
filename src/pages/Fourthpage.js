import React from 'react'
import Headertwo from "../components/Headertwo"
import "../styles/Fourthpage.css"



function Fourthpage() {
    return (
        <div className='Fourth'>
            <Headertwo />
            <div className='container Fourthpart'>
                <div className="form-group fourth-form">
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
                <button className='btn-save'>Save</button> 
            </div>
            
        </div>
    )
}

export default Fourthpage
