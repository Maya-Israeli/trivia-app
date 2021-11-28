import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';


const NavBar: React.FC = () => {
	return (
		<nav className="nav">
			<NavLink to="/questions">
				Home
			</NavLink>
			{' '}|{' '}
			<NavLink to="/about">
				About
			</NavLink>
		</nav>
	);
};

export default NavBar;