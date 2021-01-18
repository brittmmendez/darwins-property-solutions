import React, { Component } from 'react';
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../images/logo2.png"

class Header extends Component {
	render() {
		return (
			<div className="gradient bg-no-repeat relative z-10 main-header">
				<header className="w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 text-white">
					<div className="hidden md:flex justify-between items-center py-2 border-b text-sm py-3">
						<div className="">
							<ul className="flex text-white">
								<li>
									<a href="https://goo.gl/maps/TAM9enEZsrrBUSng9" target="_blank" rel="noopener noreferrer" title="google-maps" className="block flex items-center opacity-75 hover:opacity-100">
										<div className="flex items-center">
											<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
												<path
													d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
											</svg>

											<span className="ml-2">559 N Wayne Ave., Cincinnati, OH 45215</span>
										</div>
									</a>
								</li>
								<li className="ml-6">
									<a href="tel:5134886021" title="phone number" className="block flex items-center opacity-75 hover:opacity-100">
										<div className="flex items-center">
											<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
												<path
													d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
											</svg>

											<span className="ml-2">513-488-6021</span>
										</div>
									</a>
								</li>
							</ul>
						</div>

						<div className="">
							<ul className="flex justify-end text-white">
								<li>
									<a href="https://www.facebook.com/Darwins-Property-Solutions-101514971798704" target="_blank" rel="noopener noreferrer" title="facebook">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
											<path
												d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z">
											</path>
										</svg>
									</a>
								</li>

								<li className="ml-6">
								<a href="https://www.instagram.com/darwinspropertysolutions/" target="_blank" rel="noopener noreferrer" title="instagram">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
											<path
												d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z">
											</path>
											<circle cx="11.994" cy="11.979" r="3.003"></circle>
										</svg>
									</a>
								</li>

							</ul>
						</div>
					</div>
					<div className="flex flex-wrap items-center justify-between pb-2 border-top border-gray-400">
						<div className="w-1/2 md:w-auto">
							<Link to="/" className="text-white font-bold text-2xl">
								<img
									alt="logo"
									className="header-logo"
									src={logo}
								/>
							</Link>
						</div>

						<label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
							<svg className="fill-current text-white"
							xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
							<title>menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
							</svg>
						</label>

						<input className="hidden" type="checkbox" id="menu-toggle"/>

						<div className="hidden md:block w-full md:w-auto" id="menu">
							<nav className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
								<ul className="md:flex items-center">
									<li>
										<Link to="/about" className="nav py-2 inline-block md:text-white lg:block font-semibold" >About Us</Link>
									</li>
									<li className="md:ml-4">
										<Link to="/roofing" className="nav py-2 inline-block md:text-white md:px-2 font-semibold">Roofing</Link>
									</li>
									<li className="md:ml-4">
										<Link to="/interior-remodeling" className="nav py-2 inline-block md:text-white md:px-2 font-semibold">Interior Remodeling</Link>
									</li>
									<li className="md:ml-4">
										<Link to="/exterior-services" className="nav py-2 inline-block md:text-white md:px-2 font-semibold">Exterior Services</Link>
									</li>
									<li className="md:ml-4">
										<Link to="/photo-gallery" className="nav  py-2 inline-block md:text-white md:px-2 font-semibold">Photo Gallery</Link>
									</li>
									<li className="md:ml-4">
										<Link to="/reviews" className="nav  py-2 inline-block md:text-white md:px-2 font-semibold">Reviews</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>

				<div className="w-full px-6 bg-fixed h-2">
					<div className="container header-box max-w-4xl mx-auto text-center">
						
						<h1 className="text-5xl font-bold leading-tight text-center">
							{this.props.title}
						</h1>
												
						{this.props.showTagline &&
							<p className="text-lg text-center">
								Serving the construction industry of Ohio, Kentucky, and Indianna since 2011.
							</p>
						}	
						{this.props.showBtn && 
							<Link to="/contact" className="primary-btn inline-block mt-8 px-8 py-4">
								Schedule a Consultation
							</Link>
						}
				</div>
			</div>	
		</div>
		);
	}
}

export default Header;

Header.propTypes = {
	title: PropTypes.string,
	showTagline: PropTypes.bool,
	showBtn: PropTypes.bool,
	showImg: PropTypes.bool
}

Header.defaultProps = {
	title: "",
	showTagline: false,
	showImg: false,
	showBtn: false
}