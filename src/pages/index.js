import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import helmet from "../images/svg/014-helmet.svg"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

			<Header showImg showBtn showTagline/>

			{/* Services Section */}
			<div className="w-full py-12 ">
				<div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto text-center pb-10"> 
					<h2 className="w-full my-2 text-4xl leading-tight text-center">Services</h2>
				</div>
				
				<div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2 relative">
						<div data-sal="slide-up" data-sal-delay="100" data-sal-duration="500" >
							<img src="https://static3.depositphotos.com/1008025/235/i/600/depositphotos_2352022-stock-photo-house-construction.jpg" className="w-full h-64 object-cover mb-6 rounded shadow-md"/>
						</div>

						<h3 className="title-overlay text-3xl my-4 flex flex-col items-center justify-center px-2 absolute">Industrial</h3>
					</div>
					
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2 relative">
						<div data-sal="slide-up" data-sal-delay="100" data-sal-duration="500"  >
						<img src="https://static3.depositphotos.com/1008025/235/i/600/depositphotos_2352022-stock-photo-house-construction.jpg" className="w-full h-64 object-cover mb-6 rounded shadow-md"/>
						</div>
						<h3 className="title-overlay text-3xl my-4 flex flex-col items-center justify-center px-2 absolute">Commercial</h3>
					</div>
					
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2 relative">
					<div data-sal="slide-up" data-sal-delay="100" data-sal-duration="500"  >
						<img src="https://static3.depositphotos.com/1008025/235/i/600/depositphotos_2352022-stock-photo-house-construction.jpg" className="w-full h-64 object-cover mb-6 rounded shadow-md"/>
					</div>

						<h3 className="title-overlay my-4 text-3xl flex flex-col items-center justify-center px-2 absolute">Residential</h3>
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
								Providing the best services in the construction industry since 2011.
							</h3>
							
							<p className="mb-5">Established in 2011, Darwins Property Solutions has been dedicated to providing the best services in the construction industry in Ohio and Kentucky. We specialize in roofing and landscaping for commercial and residential properties as well as landscaping services. Our mission is to provide the best quality service you deserve. </p>
							<Link to="/contact" className="nav py-2 inline-block md:text-white md:px-2 font-semibold">
								<button className="primary-btn inline-block mt-8 px-8 py-4"> Schedule a Consultation</button>
							</Link>
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

			{/* <!--Team Section--> */}
			<section className=" pt-8">
				<div className="container mx-auto flex flex-wrap pt-4 pb-12">
					<h2 className="w-full my-2 text-4xl leading-tight text-center">Our Team</h2>
					<div className="w-full mb-4">	
						<div className="mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
					</div>
				
								<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex- overflow-hidden text-center">
							<div className="team-member-box">
								<img src={helmet} className="team-member w-full h-64 object-cover mb-6 rounded shadow-md"/>
								<h3 className="w-full font-bold text-xl px-6 pt-4">Darwin Paredes </h3>
								<h3 className="w-full font-bold text-l px-6 pb-2">Construction Manager </h3>
								<p className="text-base px-6 mb-5">
									<a href="mailto:darwin@darwinspropertysolutions.com" title="" className="items-center opacity-75 hover:opacity-100">
										Darwin@darwinspropertysolutions.com
									</a>
								</p>
							</div>
						</div>
					</div>
					
					<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-center">
						<div className="flex-1 overflow-hidden">
							<div className="team-member-box">
								<img src={helmet} className="team-member w-full h-64 object-cover mb-6 rounded shadow-md"/>
								<h3 className="w-full font-bold text-xl px-6 pt-4">Yayna Almonte </h3>
								<h3 className="w-full font-bold text-l px-6 pb-2">Office Manager </h3>
								<p className="text-base px-6 mb-5">
									<a href="mailto:darwin@darwinspropertysolutions.com" title="" className="items-center opacity-75 hover:opacity-100">
										Yayna@darwinspropertysolutions.com
									</a>
								</p>
							</div>
						</div>
					</div>
					
					<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-center">
						<div className="flex-1 overflow-hidden">
							<div className="team-member-box">
								<img src={helmet} className="team-member w-full h-64 object-cover mb-6 rounded shadow-md"/>
								<h3 className="w-full font-bold text-xl px-6 pt-4">Don Morris </h3>
								<h3 className="w-full font-bold text-l px-6 pb-2">Sales Representative </h3>
								<p className="text-base px-6 mb-5">
									<a href="mailto:darwin@darwinspropertysolutions.com" title="" className="items-center opacity-75 hover:opacity-100">
										Don@darwinspropertysolutions.com
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!--/Team Section--> */}
    </Layout>
  );
}

export default IndexPage;
