import React from 'react';
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

// import components
import {NavBar} from "./components/NavBar";
import {Welcome} from "./components/Welcome";
import {About} from "./components/About";
import {Gallery} from "./components/Gallery";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

// import fontawesome icons
import {library} from "@fortawesome/fontawesome-svg-core";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fab, faGithub} from "@fortawesome/free-brands-svg-icons";
import {
	fas,
	faCat,
	faEllipsisH,
	faEnvelope,
	faHeart,
	faKey,
	faPencilAlt,
	faSignInAlt,
	faSignOutAlt,
	faTrash,
	faUser
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, far, fas, faCat, faEllipsisH, faEnvelope, faHeart, faGithub, faKey, faPencilAlt, faSignInAlt, faSignOutAlt, faTrash, faUser);

const App = () => (
	<>
		{/* NAVBAR */}
		<NavBar/>

		{/* WELCOME / HERO SECTION */}
		<Welcome/>

		{/* ABOUT SECTION */}
		<About/>

		{/* GALLERY SECTION */}
		<Gallery/>

		{/* CONTACT SECTION */}
		<Contact/>

		{/* FOOTER */}
		<Footer/>
	</>
);

ReactDOM.render(<App/>, document.querySelector('#root'));