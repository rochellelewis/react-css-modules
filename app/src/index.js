import React from 'react';
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

// import local images
import gkephart from './img/gkephart.jpg';

// import components
import {NavBar} from "./components/NavBar";
import {Welcome} from "./components/Welcome";

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

		<section id="about" class="py-10 text-light">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-4 mb-3">
						<div class="h-100 p-4 border text-center text-md-left">
							<h3 class="mb-0">About Me</h3>
						</div>
					</div>
					<div class="col-md-6 col-lg-8">
						<p class="lead text-justify">Find something else more interesting eat half my food and ask for more. No, you can't close the door, i haven't decided whether or not i wanna go out pose purrfectly to show my beauty. Mark territory dont wait for the storm to pass, dance in the rain and skid on floor.</p>
						<p class="lead text-justify">Crash into wall scratch the postman wake up lick paw wake up owner meow meow meow loudly just to annoy owners i cry and cry and cry unless you pet me, and then maybe i cry just for fun.</p>
					</div>
				</div>
			</div>
		</section>

		<section id="gallery" class="py-10">
			<div class="container">
				<div class="row">
					<div class="col text-center mb-4">
						<h3 class="mb-4">Design Assets</h3>
						<p class="lead">The following assets were used in the design of this page.</p>
					</div>
				</div>

				<div class="row pt-5">
					<div class="col-8 offset-2 offset-sm-0 col-sm-6 col-lg-3 mb-2">
						<div class="card h-100">
							<img src={gkephart} class="card-img-top" alt="george kephart"/>
								<div class="card-body">
									<h5 class="card-title">Google Fonts</h5>
									<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
								</div>
						</div>
					</div>
					<div class="col-8 offset-2 offset-sm-0 col-sm-6 col-lg-3 mb-2">
						<div class="card h-100">
							<img src={gkephart} class="card-img-top" alt="george kephart"/>
								<div class="card-body">
									<h5 class="card-title">Fontawesome.io</h5>
									<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
								</div>
						</div>
					</div>
					<div class="col-8 offset-2 offset-sm-0 col-sm-6 col-lg-3 mb-2">
						<div class="card h-100">
							<img src={gkephart} class="card-img-top" alt="george kephart"/>
								<div class="card-body">
									<h5 class="card-title">Unsplash.com</h5>
									<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
								</div>
						</div>
					</div>
					<div class="col-8 offset-2 offset-sm-0 col-sm-6 col-lg-3 mb-2">
						<div class="card h-100">
							<img src={gkephart} class="card-img-top" alt="george kephart"/>
								<div class="card-body">
									<h5 class="card-title">Bootstrap</h5>
									<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
								</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="contact" class="py-10">
			<div class="container">
				<div class="row">
					<div class="col-md-8 offset-md-2">
						<div class="border p-5">
							<h3 class="text-center mb-5">Contact Me</h3>
							<form id="rochelles-demo-form" action="../php/" method="post">
								<div class="form-group">
									<label class="sr-only" for="contactDemoName">Name <span class="text-danger">*</span></label>
									<div class="input-group">
										<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-user" aria-hidden="true"></i>
										</span>
										</div>
										<input type="text" class="form-control" id="contactDemoName" name="contactDemoName" placeholder="Name"/>
									</div>
								</div>
								<div class="form-group">
									<label class="sr-only" for="contactDemoEmail">Email <span class="text-danger">*</span></label>
									<div class="input-group">
										<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-envelope" aria-hidden="true"></i>
										</span>
										</div>
										<input type="email" class="form-control" id="contactDemoEmail" name="contactDemoEmail" placeholder="Email"/>
									</div>
								</div>
								<div class="form-group">
									<label class="sr-only" for="contactDemoSubject">Subject</label>
									<div class="input-group">
										<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fa fa-pencil" aria-hidden="true"></i>
										</span>
										</div>
										<input type="text" class="form-control" id="contactDemoSubject" name="contactDemoSubject" placeholder="Subject"/>
									</div>
								</div>
								<div class="form-group">
									<label class="sr-only" for="contactDemoMessage">Message <span class="text-danger">*</span></label>
									<div class="input-group">
										<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-comment" aria-hidden="true"></i>
										</span>
										</div>
										<textarea class="form-control" rows="5" id="contactDemoMessage" name="contactDemoMessage" placeholder="I <3 CopyPasta :D~ (2000 characters max)"></textarea>
									</div>
								</div>

								<div class="g-recaptcha" data-sitekey="--YOUR RECAPTCHA SITE KEY--"></div>
								<button class="btn btn-warning" type="submit"><i class="fas fa-paper-plane"></i> Send</button>
								<button class="btn btn-secondary" type="reset"><i class="fas fa-ban"></i> Reset</button>
							</form>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12">
						<div id="output-area"></div>
					</div>
				</div>
			</div>
		</section>

		<footer class="py-5">
			<div class="container-fluid">
				<div class="row">
					<div class="col text-center">
						<h4>Custom Styles Example</h4>
						<a class="lead text-body" href="https://github.com/rlewis2892/bootstrap-4-sandbox/tree/cohort-29-css" target="_blank">View this project on GitHub</a>
					</div>
				</div>
			</div>
		</footer>
	</>
);

ReactDOM.render(<App/>, document.querySelector('#root'));