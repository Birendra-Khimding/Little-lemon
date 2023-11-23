import React from 'react';
import Logo from '../images/Logo .svg';
function Footer(){
    return(
        <footer>
            <img src={Logo} alt="logo"/>
            <h3> Please Visit Us Again</h3>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
        </footer>
    );
}

export default Footer;