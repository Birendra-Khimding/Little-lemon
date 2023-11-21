import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';

function Navigaion(){
    return (
        <>
        <nav>
            <label class="logo"> Little Lemon</label>
            <ul>
              
            <Link to="/"> Home</Link>
              
            <Link to="/about"> About</Link>
                
            <Link to ="/menu"> Menu</Link>
                
            <Link to= "/reservation"> Reservation</Link>
            </ul>
        </nav>
       
        </>
    );
}

export default Navigaion;