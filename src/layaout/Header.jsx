import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react'

import "./Header.styles.css"

const Header = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();

    const handlerMenu = () => {
        setShow(!show)
    }
    return (
        <>
            <div className= "header-container">
                <h3>Github Explorer</h3>
                <div className="hiden-button-menu">
                    <h5>By Javier Fonseca</h5>
                    <button onClick={handlerMenu}> <i className="fa fa-bars"></i></button>
                </div>
            </div>
            <div className={show ? "menuNav" : "notVisible"}>
                <ul>
                    <li onClick={()=> navigate('/')}>
                        <i className="fa fa-home"/> <span>Home</span>
                    </li>
                    <li onClick={()=> navigate(- 1)}>
                        <i className="previous round">&#8249;</i><span>Go Back</span>
                    </li>
                    <li onClick={()=> navigate(+ 1)}>
                        <span className="onlySpan">Next</span><i className="next round">&#8250;</i>
                    </li>
                </ul>
             </div>
            
        </>
    )
}

export default Header
