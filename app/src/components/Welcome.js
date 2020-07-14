import React from 'react';
import styles from './welcome.module.css';

export const Welcome = () => {
	return (
		<>
			<section id="welcome" className="d-flex align-items-center">
				<div className="container d-flex justify-content-center">
					<div className="jumbotron text-right my-5">
						<h1>Hello Custom Bootstrap!</h1>
						<p className="lead mb-0">A George Kephart Compatible PWP example.</p>
					</div>
				</div>
			</section>
		</>
	)
}