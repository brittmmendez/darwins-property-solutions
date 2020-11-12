import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      
			<div className="w-full py-24 px-6 bg-fixed gradient bg-no-repeat bg-center relative z-10 h-2">
				<div className="container max-w-4xl mx-auto text-center">
					<h1 className=" pt-12 text-5xl font-bold leading-tight text-center text-gray-100 mb-3">Lorem ipsum dolor sit amet</h1>
					<p className="text-md md:text-lg text-center text-white ">Ut enim ad minim veniam, quis nostrud exercitation</p>
					<Link to="/about" 
						 className="primary-btn inline-block mt-8 px-8 py-4"
					>Find out more</Link>
				</div>

			</div>

			<div className="w-full py-12 ">
				<div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto text-center pb-10"> 
					<h2 className="w-full my-2 text-4xl leading-tight text-center">Services</h2>
				</div>
				
				<div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2">
					<div data-sal="slide-up" data-sal-delay="100" data-sal-duration="500" >
						<img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800" className="w-full h-64 object-cover mb-6 rounded shadow-md"/>
					</div>

						<h3 className="text-xl leading-tight mb-2">Ut enim ad minim veniam officia deserunt</h3>
						<p className="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur.</p>
					</div>
					
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2">
						<div data-sal="slide-up" data-sal-delay="100" data-sal-duration="500"  >
						<img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800" className="w-full h-64 object-cover mb-6 rounded shadow-md"/>
						</div>
						<h3 className="text-xl leading-tight mb-2">Ut enim ad minim veniam officia deserunt</h3>
						<p className="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur.</p>
					</div>
					
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2">
					<div data-sal="slide-up" data-sal-delay="100" data-sal-duration="500"  >
						<img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800" className="w-full h-64 object-cover mb-6 rounded shadow-md"/>
					</div>

						<h3 className="text-xl leading-tight mb-2">Ut enim ad minim veniam officia deserunt</h3>
						<p className="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur.</p>
					</div>
				</div>

				<div className="container max-w-4xl mx-auto text-center pt-12 pb-10">
					<Link to="/services" 
					className="primary-btn inline-block px-8 py-4"
					>See All Services</Link>
				</div>
			</div>
			{/* <!--End All Services Section--> */}
			
			{/* <!--About Section--> */}
			<div className="w-full py-12  color-background">
				<div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
					<div data-sal="slide-right" data-sal-delay="200" data-sal-duration="500">
					<h3 className="text-3xl mb-8 leading-tight">
							Lorem ipsum dolor sit amet, consectetur adipisicing.
						</h3>
						
						<p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut.</p>
						<p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					</div>
					
					<div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
					<div data-sal="slide-left" data-sal-delay="200" data-sal-duration="500">
						<img src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=800" className="w-full h-auto rounded shadow-md" />
					</div>
					</div>
				</div>
			</div>
			{/* <!--End About Section--> */}

			{/* <!--Guarantee Section--> */}
			<section className=" py-8">
				<div className="container mx-auto flex flex-wrap pt-4 pb-12">
					<h2 className="w-full my-2 text-4xl leading-tight text-center">Our Team</h2>
					<div className="w-full mb-4">	
						<div className="mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
				
								<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1  rounded-t rounded-b-none overflow-hidden">
							<div className="team-member-box">
								{/* <p className="max-w-xs m-auto text-gray-600 text-xs md:text-sm px-6">
									<svg className="h-20 mx-auto mb-10" id="icon-paint" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path d="M18 1h-8a3 3 0 0 0-3 3H6a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h6a1 1 0 0 1 1 1v1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2v-1a3 3 0 0 0-3-3H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm-3 16v4h-2v-4zm4-11a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z"></path>
									</svg>
								</p> */}
								<h3 className="w-full font-bold text-xl px-6 pt-4 pb-2">Lorem ipsum dolor sit amet.</h3>
								<p className="text-base px-6 mb-5">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</div>
						</div>
						{/* <div className="flex-none mt-auto  rounded-b rounded-t-none overflow-hidden p-6">
							<div className="flex items-center justify-center">
								<Link to="/about" title=""> 
								<button 
									className="secodary-btn inline-block my-6 px-8 py-4">
										Action
									</button>
								</Link>
							</div>
						</div> */}
					</div>
					
					<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1  rounded-t rounded-b-none overflow-hidden">
							<div className="team-member-box">
								{/* <p className="max-w-xs m-auto text-gray-600 text-xs md:text-sm px-6">
									<svg className="h-20 mx-auto mb-10" id="icon-paint" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path d="M18 1h-8a3 3 0 0 0-3 3H6a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h6a1 1 0 0 1 1 1v1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2v-1a3 3 0 0 0-3-3H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm-3 16v4h-2v-4zm4-11a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z"></path>
									</svg>
								</p> */}
								<h3 className="w-full font-bold text-xl px-6 pt-4 pb-2">Lorem ipsum dolor sit amet.</h3>
								<p className="text-base px-6 mb-5">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</div>
						</div>
						{/* <div className="flex-none mt-auto  rounded-b rounded-t-none overflow-hidden p-6">
							<div className="flex items-center justify-center">
								<Link to="/about" title=""> 
								<button 
									className="secodary-btn inline-block my-6 px-8 py-4">
										Action
									</button>
								</Link>
							</div>
						</div> */}
					</div>
					
					<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1  rounded-t rounded-b-none overflow-hidden">
							<div className="team-member-box">
								{/* <p className="max-w-xs m-auto text-gray-600 text-xs md:text-sm px-6">
									<svg className="h-20 mx-auto mb-10" id="icon-paint" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path d="M18 1h-8a3 3 0 0 0-3 3H6a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h6a1 1 0 0 1 1 1v1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2v-1a3 3 0 0 0-3-3H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm-3 16v4h-2v-4zm4-11a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z"></path>
									</svg>
								</p> */}
								<h3 className="w-full font-bold text-xl px-6 pt-4 pb-2">Lorem ipsum dolor sit amet.</h3>
								<p className="text-base px-6 mb-5">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</div>
						</div>
						{/* <div className="flex-none mt-auto  rounded-b rounded-t-none overflow-hidden p-6">
							<div className="flex items-center justify-center">
								<Link to="/about" title=""> 
								<button 
									className="secodary-btn inline-block my-6 px-8 py-4">
										Action
									</button>
								</Link>
							</div>
						</div> */}
					</div>
				</div>
			</section>
			{/* <!--/Guarantee Section--> */}

			{/* <!--Action Area--> */}
			<div className="py-16" >
				<section className="container mx-auto text-center py-6 mb-12">
					<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">CALL US TODAY FOR A FEW QUOTE</h1>
					<div className="w-full mb-4">	
						<div className="h-1 mx-auto  w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
					<h3 className="my-4 text-3xl leading-tight text-white">(513)-555-5555</h3>	
				</section>
			</div>
			{/* <!--/Action Area--> */}
    </Layout>
  );
}

export default IndexPage;
