import React from 'react'
import Headertwo from "../components/Headertwo"
import "../styles/Fifthpage.css"

function Fifthpage() {
    return (
        <div className='Fifth'>
            <Headertwo />
         <div className='container Fifthpart'>
              <div className="form-group3 fifth-form">
                    <label className='future' htmlFor="date">Date in the future</label>
                    <input type="text" style={{fontSize:"12px"}} value="20/07/2050" />
                </div>
                <div className="form-group3">
                    <label htmlFor="Title">Title</label>
                    <input type="text" style={{fontSize:"12px"}} value="Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum."/>
                </div>
                <div className="form-group3-1">
                    <label htmlFor="Details">Details</label>
                </div>

                <div>
                    <textarea style={{fontSize:"12px",padding:"10px",overflow:"hidden"}} name="statement" id="statement" cols="64" rows="10" maxLength="10000">
                            Until recently, the prevailing view assumed lorem ipsum was 
                            born as a nonsense text. “It’s not Latin, though it looks like it,
                            and it actually says nothing,” Before & After magazine answered a 
                            curious reader, “Its ‘words’ loosely approximate the frequency with 
                            which letters occur in English, which is why at a glance it looks pretty
                            real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text.
                            “It’s not Latin, though it looks like it, and it actually says nothing,” Before &
                            After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                            with which letters occur in English, which is why at a glance it looks pretty real.
                            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.
                    </textarea>
                </div>
               <button className='btn-creates'>Update</button> 
         </div>
            
        </div>
    )
}

export default Fifthpage
