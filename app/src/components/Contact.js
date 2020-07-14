import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Contact = () => {
	return (
		<>
			<section id="contact" className="py-10">
				<div className="container">
					<div className="row">
						<div className="col-md-8 offset-md-2">
							<div className="border p-5">
								<h3 className="text-center mb-5">Contact Me</h3>
								<form id="rochelles-demo-form" action="../php/" method="post">
									<div className="form-group">
										<label className="sr-only" htmlFor="contactDemoName">Name <span
											className="text-danger">*</span></label>
										<div className="input-group">
											<div className="input-group-prepend">
										<span className="input-group-text">
											<FontAwesomeIcon icon='user'/>
										</span>
											</div>
											<input type="text" className="form-control" id="contactDemoName" name="contactDemoName"
													 placeholder="Name" />
										</div>
									</div>
									<div className="form-group">
										<label className="sr-only" htmlFor="contactDemoEmail">Email <span
											className="text-danger">*</span></label>
										<div className="input-group">
											<div className="input-group-prepend">
										<span className="input-group-text">
											<FontAwesomeIcon icon='envelope'/>
										</span>
											</div>
											<input type="email" className="form-control" id="contactDemoEmail"
													 name="contactDemoEmail" placeholder="Email" />
										</div>
									</div>
									<div className="form-group">
										<label className="sr-only" htmlFor="contactDemoSubject">Subject</label>
										<div className="input-group">
											<div className="input-group-prepend">
										<span className="input-group-text">
											<FontAwesomeIcon icon='pen'/>
										</span>
											</div>
											<input type="text" className="form-control" id="contactDemoSubject"
													 name="contactDemoSubject" placeholder="Subject" />
										</div>
									</div>
									<div className="form-group">
										<label className="sr-only" htmlFor="contactDemoMessage">Message <span
											className="text-danger">*</span></label>
										<div className="input-group">
											<div className="input-group-prepend">
										<span className="input-group-text">
											<FontAwesomeIcon icon='comment'/>
										</span>
											</div>
											<textarea className="form-control" rows="5" id="contactDemoMessage"
	name="contactDemoMessage"
	placeholder="I <3 CopyPasta :D~ (2000 characters max)"/>
										</div>
									</div>

									<div className="g-recaptcha" data-sitekey="--YOUR RECAPTCHA SITE KEY--"/>
									<button className="btn btn-warning mr-2" type="submit">
										<FontAwesomeIcon icon='paper-plane'/>&nbsp;Send
									</button>
									<button className="btn btn-secondary" type="reset">
										<FontAwesomeIcon icon='ban'/>&nbsp;Reset
									</button>
								</form>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12">
							<div id="output-area"/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}