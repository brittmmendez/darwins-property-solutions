import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import PhotoSlider from "../components/PhotoSlider";
import PropTypes from "prop-types"
import { Link } from "gatsby"

function InteriorRemodeling({data}) {
  let images = data.allCloudinaryMedia.nodes.filter((p) =>p.public_id.includes("interior"));

  return (
    <Layout>
      <SEO
        title="Interior Services"
        keywords={[`construction`, 'home remodeling', `interior`, "commericial services", "industrial services", "reseindential services", "painting", "flooring", "window installation", "Skylight","Basement Renovations" ]}
      />
      
      <Header title="Interior Remodeling"/>

      {/* <!--Intro Section--> */}
			<section className="py-6">
        <div className=" text-center px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<h2 className="w-full my-8 text-l md:text-4xl leading-tight">
            Residential <span>&#183;</span> 
            {" "} Commericial <span>&#183;</span> 
            {" "} Industrial 
          </h2>
				</div>
				
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
						<div>
						  <h3 className="text-center md:text-left text-3xl mb-8 leading-tight">
								Looking to update or create a completely new environment in your home or building?
							</h3>
							
							<p className="mb-5">
                Whether you are looking to do a minor repair or major interior renovation, Darwins Property Solutions offers a comprehensive list of services that will meet your needs, budget, and timeline.  
                We offer floor-to-cieling remodeling services in Ohio, Kentucky, and Indiana areas.  
              </p>
						</div>
					</div>
          <div className="services my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
            <PhotoSlider data={images}/>
					</div>
				</div>
			</section>
			{/* <!--End Intro Section--> */}

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h2 id="industrial" className="w-full my-8 text-4xl leading-tight">Services</h2>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-12"> 
          Maintaining the interior of your home or building is just as important as it is to maintain the exterior. 
          In the long run, mainting the interior oh your home or bilding can lead to many benefits. It saves you money, keeps your home running efficiently, increases your homes value, and provides peace of mind knowing your taking care of your number one investment. 
          </p>

          <div className="about-us flex flex-wrap w-full">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded ">
                <span className="icon_info">i</span>
                <h3 className="text-center text-3xl mb-6">Repair</h3>
                <p className="text-left"> Taking care of the small problems when you see them makes it so you do not have the problem worsen and develop into a bigger issue over time.
                </p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded">
                <span className="icon_info">i</span>
                <h3 className="text-center text-3xl mb-6">Replace</h3>
                <p className="text-left">
                  Not sure if you need a replacement or a repair? Call Darwins Property Solutions now for a free and trustworthy quote from one of our experts. 
                </p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded">
                <span className="icon_info">i</span>
                <h3 className="text-center text-3xl mb-6">Maintenance</h3>
                <p className="text-left"> 
                  Performing routine maintenance on your home now helps you avoid costly repairs in the future.
                </p>
              </div>
            </div>
          </div>
        </div>  

        <div className="text-center mt-6">
          <Link to="/contact" title="contact page link" className="nav py-2 inline-block md:text-white md:px-2 font-semibold">
            <button className="primary-btn inline-block mt-8 px-8 py-4"> Schedule a Consultation</button>
          </Link>
        </div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Flooring</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> Wood, carpeting tiles, concrete, and other types of flooring services.  </p>
				</div>
      </section>
      
      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Painting</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
        <p className="mb-5"> Prepare painting surfaces by washing walls, repairing holes and/or removing old paint. Mix, match and apply paints and other finishes to various surfaces.  </p>
				</div>
      </section>
  
      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Fireplaces</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> Clean, sweep and repair. Repairs include masonry work and relining. </p>
				</div>
      </section>
    
      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Bookshelves & cabinets</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> Cutting, fitting and cleaning and installation services for all types of bookshelves and cabinets.  </p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Lighting</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> Set up lighting equipment, assemble all the lighting and ensure everything works properly. </p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Basement Renovations</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> Wall construction, electrical work planning, putting in insulation, installing gypsum walls, and others.  </p>
				</div>
      </section>


      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Skylight Installations</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> All types of fixed skylights work. </p>
				</div>
      </section>
      <div className="container max-w-4xl mx-auto text-center pt-12 pb-10">
        <Link to="/services" 
          title="all services link"
          className="primary-btn inline-block px-8 py-4"
					>See All Services
        </Link>
			</div>
    </Layout>
  );
}

export const query = graphql`
 query {
	allCloudinaryMedia{
    nodes {
      secure_url
      public_id
    }
  }
}
`

InteriorRemodeling.propTypes = {
  data: PropTypes.object,
}

export default InteriorRemodeling;
