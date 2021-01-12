import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import helmet from "../images/svg/014-helmet.svg"
import exterior from "../images/exterior.png"

function IndexPage() {
  return (
    <Layout>
      <SEO
		title="Home"
		description="Darwins Property Solutions is a full service construction company for all your roofing, interior, and exterior needs. We can begin at any phase of a project and work with residential, commercial, and industrial customers.
		We have trained specialists who are ready to provide you with high quality services that include interior remodling, painting, exterior roofing repairs and replacements, replacement windows, siding, ventilation, insulation, chimney repairs, concrete slabs and more."
        keywords={[`construction`, 'home remodeling', `roofing`, `interior`, `exterior`, "commericial services", "industrial services", "reseindential services", "painting"," landscaping", "flooring", "window installation"]}
      />

			{/* <Header showImg showBtn showTagline/> */}
			<div className = "home">
				<Header title="Darwins Property Solutions" showTagline="Serving the construction industry of Ohio, Kentucky, and Indianna since 2011." showBtn/>
			</div>
			{/* Services Section */}
			<div className="w-full py-12 ">
				<div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto text-center pb-10"> 
					<h2 className="w-full my-2 text-4xl leading-tight text-center">Services</h2>
				</div>
				
				<div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
				<p className="mb-5">Darwins Property Solutions is a full service construction company for all your roofing, interior, and exterior needs. We have a Cohesive crew that has worked together for over 15 years and specialize on the building envelope. We can begin at any phase of a project and work with residential, commercial, and industrial customers.
					We have trained specialists who are ready to provide you with high quality services that include interior remodling, painting, exterior roofing repairs and replacements, replacement windows, siding, ventilation, insulation, chimney repairs, concrete slabs and more. Quality projects is our standard and we aim to delight our clients with the end results.
					 </p>
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2 relative">
					<div className="parent" data-sal="slide-up" data-sal-delay="100" data-sal-duration="500"  >
						<Link to="/services#roofing" title="roofing link">
							<img src="https://res.cloudinary.com/dwk6itwu5/image/upload/v1608433927/Photos/roofing/Image_9_z9bbiq.jpg" className="services-img w-full h-64 object-cover mb-6 rounded shadow-md" alt="Residential property"/>
						</Link>
					</div>
						<Link to="/services#roofing" title="roofing link" className="title-overlay my-4 text-3xl flex flex-col items-center justify-center px-2 absolute">Roofing Services
						</Link>
					</div>
					
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2 relative">
						<div className="parent" data-sal="slide-up" data-sal-delay="100" data-sal-duration="500"  >
							<Link to="/services#interior" title="interior link">
								<img src="https://res.cloudinary.com/dwk6itwu5/image/upload/v1608433969/Photos/interior/Image_1_wtm9h1.jpg" className="services-img w-full h-64 object-cover mb-6 rounded shadow-md" alt="Commercial property"/>
							</Link>
						</div>
						<Link to="/services#interior" title="interior link" className="title-overlay text-3xl my-4 flex flex-col items-center justify-center px-2 absolute">Interior Remodeling
						</Link>
					</div>

					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2 relative">
							<div className="parent" data-sal="slide-up" data-sal-delay="100" data-sal-duration="500" >
								<Link to="/services#exterior"  title="industrial link">
									<img src={exterior} className="services-img w-full h-64 object-cover mb-6 rounded shadow-md" alt="Indestrial property"/>
								</Link>
							</div>

							<Link to="/services#exterior" title="industrial link" className="title-overlay text-3xl my-4 flex flex-col items-center justify-center px-2 absolute">Exterior Services</Link>
						</div>
				</div>

				<div className="container max-w-4xl mx-auto text-center pt-12 pb-10">
					<Link to="/services" 
					title="all services link"
					className="primary-btn inline-block px-8 py-4"
					>See All Services</Link>
				</div>
			</div>
			{/* <!--End All Services Section--> */}
			
			
			{/* <!--About Section--> */}
			<div className="w-full pt-6 pb-12  color-background">
				<div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
						<div>
						<h3 className="text-center md:text-left text-3xl mb-8 leading-tight">
								Over a Decade of Experience
							</h3>
							
							<p className="mb-5">Established in 2011, Darwins Property Solutions has been dedicated to providing best in class services to the construction industry of the Ohio, Kentucky and Indiana area.  With over a decade of experience, we have grown into one of the most trusted and well respected full service construction companies specialized on the building envelope in the area. We are committed to providing high quality solutions, competitive pricing, and customer satisfaction.</p>
 
							<p className="mb-5">We specialize in a wide range of services for industrial, commercial, and residential projects.</p>
							<div className="text-center md:text-left">
								<Link to="/contact" title="contact page link" className="nav py-2 inline-block md:text-white md:px-2 font-semibold">
									<button className="primary-btn inline-block mt-8 px-8 py-4"> Schedule a Consultation</button>
								</Link>
							</div>
						</div>
					</div>
					
					<div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
						<div>
							<img src="https://res.cloudinary.com/dwk6itwu5/image/upload/v1608433988/Photos/exterior/Image_1_copy_df6msm.jpg" className="vehicle-img w-full rounded shadow-md" alt="Vehicle with logo"/>
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
							<div className="team-member-box"  data-sal="slide-up" data-sal-delay="100" data-sal-duration="500">
								<img src={helmet} className="team-member w-full h-64 object-cover mb-6 rounded" alt="Construction Manager Helmet"/>
								<h3 className="w-full font-bold text-white text-xl px-6 pt-4">Darwin Paredes </h3>
								<h3 className="w-full font-bold text-l px-6 pb-2">Construction Manager <br/> 33 years of experience </h3>
								<p className="text-base px-6 mb-5">
									<a href="mailto:darwin@darwinspropertysolutions.com" title="Construction Manager Email" className="items-center opacity-75 hover:opacity-100">
										Darwin@darwinspropertysolutions.com
									</a>
								</p>
							</div>
						</div>
					</div>

					<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-center">
						<div className="flex-1 overflow-hidden">
							<div className="team-member-box"  data-sal="slide-up" data-sal-delay="100" data-sal-duration="500">
								<img src={helmet} className="team-member w-full h-64 object-cover mb-6 rounded" alt="Sales Representative Helmet"/>
								<h3 className="w-full font-bold text-white text-xl px-6 pt-4">Don Morris </h3>
								<h3 className="w-full font-bold text-l px-6 pb-2">Certified Technical Consultant <br/> 33 years of experience </h3>
								<p className="text-base px-6 mb-5">
									<a href="mailto:darwin@darwinspropertysolutions.com" title="Sales Representative Email" className="items-center opacity-75 hover:opacity-100">
										Don@darwinspropertysolutions.com
									</a>
								</p>
							</div>
						</div>
					</div>
					
					<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-center">
						<div className="flex-1 overflow-hidden">
							<div className="team-member-box"  data-sal="slide-up" data-sal-delay="100" data-sal-duration="500">
								<img src={helmet} className="team-member w-full h-64 object-cover mb-6 rounded" alt="Office Manager Helmet"/>
								<h3 className="w-full text-white font-bold text-xl px-6 pt-4">Bill Turner </h3>
								<h3 className="w-full font-bold text-l px-6 pb-2">Archetect Engineer <br/> 40 years of experience </h3>
								<p className="text-base px-6 mb-5">
									<a href="mailto:darwin@darwinspropertysolutions.com" title="Office Manager Email" className="items-center opacity-75 hover:opacity-100">
										Bill@darwinspropertysolutions.com
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!--/Team Section--> */}

			{/* <!--Safety Section--> */}
			<div className="w-full py-12  color-background">
			<div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
				<div className="px-2">
					<div>
						<h2 className="w-full mt-4 mb-6 text-4xl leading-tight">
							Safety is #1
						</h2>
						<h3 className="text-3xl mb-8 leading-tight italic">
							We follow OSHA, NRCA, and AIA guidelines and regulations during every project, especially concerning health care facilities
						</h3>
					</div>
				</div>
			</div>
		</div>
		{/* <!--End Safety Section--> */}

    </Layout>
  );
}

export default IndexPage;
