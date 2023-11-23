import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Logo from '../images/Logo .svg';
function Navigaion(){
    return (
        <>
        <nav>
            <img src={Logo} alt="logo"/>
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