import React from 'react'
import Headertwo from "../components/Headertwo"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from "react-bootstrap"
import "../styles/Secondpage.css"
import { Link } from 'react-router-dom'



function Secondpage() {
    return (
        <div className='second'>
            <Headertwo />
            <div className='container secondPart'>
                <h1 className='welcomejohn'>Welcome John Doe,</h1>
                <p className='secondpara'>Here are items in your eventful moment bucket.</p>
                <div className='text-center'>
                    <Link to="/Fourthpage">
                        <Button className='btn-page2-1' variant = "primary">Add Item</Button>
                    </Link>
                    
                </div> 
                
           
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <div class="card-body card1">
                                <h5 class="card-title">
                                    Lorem ipsum began as scrambled,
                                    nonsensical Latin derived from Cicero’s 1st-century BC
                                    text De Finibus Bonorum et Malorum.
                                </h5>
                                <p class="card-text">Until recently, the prevailing view assumed lorem ipsum
                                was born as a nonsense text. “It’s not Latin, though it looks like it, and 
                                it actually says nothing,” Before & After magazine answered a curious reader,
                                “Its ‘words’ loosely approximate the frequency with which letters occur in English, 
                                which is why at a glance it looks pretty real. Until recently, the prevailing view 
                                assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, 
                                and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ 
                                loosely approximate the frequency with which letters occur in English, which is why at a glance 
                                it looks pretty real.
                                </p>
                                
                                <a className='view' href="">View Details</a>
                                <span class="card-text date1">25/05/2025</span>
                                <span class="card-text date2">25/05/2025</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">
                                    Lorem ipsum began as scrambled,
                                    nonsensical Latin derived from Cicero’s 1st-century BC
                                    text De Finibus Bonorum et Malorum.
                                </h5>
                                <p class="card-text">Until recently, the prevailing view assumed lorem ipsum
                                was born as a nonsense text. “It’s not Latin, though it looks like it, and 
                                it actually says nothing,” Before & After magazine answered a curious reader,
                                “Its ‘words’ loosely approximate the frequency with which letters occur in English, 
                                which is why at a glance it looks pretty real. Until recently, the prevailing view 
                                assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, 
                                and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ 
                                loosely approximate the frequency with which letters occur in English, which is why at a glance 
                                it looks pretty real.
                                </p>
                                
                                <a className='view' href="">View Details</a>
                                <span class="card-text date1">25/05/2025</span>
                                <span class="card-text date2">25/05/2025</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">
                                    Lorem ipsum began as scrambled,
                                    nonsensical Latin derived from Cicero’s 1st-century BC
                                    text De Finibus Bonorum et Malorum.
                                </h5>
                                <p class="card-text">Until recently, the prevailing view assumed lorem ipsum
                                was born as a nonsense text. “It’s not Latin, though it looks like it, and 
                                it actually says nothing,” Before & After magazine answered a curious reader,
                                “Its ‘words’ loosely approximate the frequency with which letters occur in English, 
                                which is why at a glance it looks pretty real. Until recently, the prevailing view 
                                assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, 
                                and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ 
                                loosely approximate the frequency with which letters occur in English, which is why at a glance 
                                it looks pretty real.
                                </p>
                                <a className='view' href="">View Details</a>
                                <span class="card-text date1">25/05/2025</span>
                                <span class="card-text date2">25/05/2025</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">
                                    Lorem ipsum began as scrambled,
                                    nonsensical Latin derived from Cicero’s 1st-century BC
                                    text De Finibus Bonorum et Malorum.
                                </h5>
                                <p class="card-text">Until recently, the prevailing view assumed lorem ipsum
                                was born as a nonsense text. “It’s not Latin, though it looks like it, and 
                                it actually says nothing,” Before & After magazine answered a curious reader,
                                “Its ‘words’ loosely approximate the frequency with which letters occur in English, 
                                which is why at a glance it looks pretty real. Until recently, the prevailing view 
                                assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, 
                                and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ 
                                loosely approximate the frequency with which letters occur in English, which is why at a glance 
                                it looks pretty real.
                                </p>
                                
                                <a className='view' href="">View Details</a>
                                <span class="card-text date1">25/05/2025</span>
                                <span class="card-text date2">25/05/2025</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <Button className='btn-page2 ' variant = "primary">Load more</Button>
                </div>
               

            </div>
            

           
        </div>
    )
}

export default Secondpage
