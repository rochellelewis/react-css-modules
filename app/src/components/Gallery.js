import React from 'react';
import gkephart from "../img/gkephart.jpg";

export const Gallery = () => {
	return (
		<>
			<section id="gallery" className="py-10">
				<div className="container">
					<div className="row">
						<div className="col text-center mb-4">
							<h3 className="mb-4">Design Assets</h3>
							<p className="lead">The following assets were used in the design of this page.</p>
						</div>
					</div>

					<div className="row pt-5">
						<div className="col-8 offset-2 offset-sm-0 col-sm-6 col-lg-3 mb-2">
							<div className="card h-100">
								<img src={gkephart} className="card-img-top" alt="george kephart" />
								<div className="card-body">
									<h5 className="card-title">Google Fonts</h5>
									<p className="card-text">This is a longer card with supporting text below as a natural
										lead-in to additional content.</p>
								</div>
							</div>
						</div>
						<div className="col-8 offset-2 offset-sm-0 col-sm-6 col-lg-3 mb-2">
							<div className="card h-100">
								<img src={gkephart} className="card-img-top" alt="george kephart" />
								<div className="card-body">
									<h5 className="card-title">Fontawesome.io</h5>
									<p className="card-text">This is a longer card with supporting text below as a natural
										lead-in to additional content.</p>
								</div>
							</div>
						</div>
						<div className="col-8 offset-2 offset-sm-0 col-sm-6 col-lg-3 mb-2">
							<div className="card h-100">
								<img src={gkephart} className="card-img-top" alt="george kephart" />
								<div className="card-body">
									<h5 className="card-title">Unsplash.com</h5>
									<p className="card-text">This is a longer card with supporting text below as a natural
										lead-in to additional content.</p>
								</div>
							</div>
						</div>
						<div className="col-8 offset-2 offset-sm-0 col-sm-6 col-lg-3 mb-2">
							<div className="card h-100">
								<img src={gkephart} className="card-img-top" alt="george kephart" />
								<div className="card-body">
									<h5 className="card-title">Bootstrap</h5>
									<p className="card-text">This is a longer card with supporting text below as a natural
										lead-in to additional content.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}