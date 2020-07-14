import React from 'react';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const NavBar = () => {
	return (
		<>
			<header>
				<div className="container-fluid">
					<nav id="main-nav" className="navbar navbar-expand fixed-top">
						<button className="navbar-toggler" type="button" data-toggle="collapse"
								  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
								  aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mx-auto">
								<li className="nav-item">
									<a className="nav-link"
										href="https://bootcamp-coders.cnm.edu/~rlewis37/bootstrap-4-sandbox/index.php#home">
										<FontAwesomeIcon icon='home' size='lg'/>
										<span className="sr-only">home</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#about">
										<FontAwesomeIcon icon='user' size='lg'/>
										<span className="sr-only">about me</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#gallery">
										<FontAwesomeIcon icon='palette' size='lg'/>
										<span className="sr-only">design assets</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#contact">
										<FontAwesomeIcon icon='envelope' size='lg'/>
										<span className="sr-only">contact me</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="mockup.php">
										<FontAwesomeIcon icon='desktop' size='lg'/>
										<span className="sr-only">mockup</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link"
										href="https://github.com/rlewis2892/react-css-modules"
										target="_blank">
										<FontAwesomeIcon icon={['fab', 'github']} size='lg'/>
										<span className="sr-only">github</span>
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		</>
	)
}