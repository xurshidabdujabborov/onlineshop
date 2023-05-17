import React from 'react'
import { Link } from 'react-router-dom'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import logo from "../../img/onlineshoplogo.png"
import "./Navbar.css"


function Navbar() {
    return (
        <header>
            <nav>
                <div className="logo">
                <Link to="/"> <img src={logo} alt="jpg" style={{height: '100px'}}/> </Link>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <div className="Icons">
                        <li>
                            <Link to="/product">
                                <LocalGroceryStoreIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                <LockOpenIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to="/user">
                                <HowToRegIcon />
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar