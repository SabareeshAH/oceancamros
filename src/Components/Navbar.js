import React from 'react';
import { useRef } from "react";
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes} from "react-icons/fa";
import "../Components/Navbar.css"
import logo from "../Images/Ozean1.png"

export default function Navbar() {
  
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    const instyle=({isActive})=>{
        return({
            fontSize:isActive?"25px":"20px",
            color:isActive?"red":"black",
            fontWeight:isActive?"bold":"lighter"
        })
    };
    return (
    <div className='header'>
            <img src={logo} width="100px"/>
            <nav class="navbar" ref={navRef}>
                <NavLink style={instyle} className="A" to="/">Home </NavLink>
                <NavLink style={instyle} to="Info">Information </NavLink>
                <NavLink style={instyle} to="/about">About </NavLink>
                <NavLink style={instyle} to="Contact">Contact Us </NavLink>
                <NavLink style={instyle} to="Service">Services </NavLink>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
    </div>
  )
}
