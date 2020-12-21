import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import { Link } from "gatsby"
import PhotoSlider from "../components/PhotoSlider";
import PropTypes from "prop-types"

function ExteriorServices({data}) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Services"
      />
      
      <Header title="Exterior Services"/>

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
								Protect from the outside in.
							</h3>
							
							<p className="mb-5">
                Darwins Property Solutions construction and maintenance services will help to keep your home or business in top shape. 
                Whether you need new siding, a fresh coat of paint, replacement windows, insulation, or other exterior upgrades, our we 
                build with high quality products that fit the needs snd budget of any construction project.
              </p>
 
							
						</div>
					</div>
          <div className="services my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
            <PhotoSlider data={data}/>
					</div>
				</div>
			</section>
			{/* <!--End Intro Section--> */}

      <section className="pt-6 pb-20">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h2 id="industrial" className="w-full my-8 text-4xl leading-tight">Services</h2>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-12"> 
          Maintaining the exterior of your home or building is one of the most important things an owner can do to also make sure the are protecting the interior as well.  Mainting the exterior can lead to many benefits and not maintiaing the exterior can lead to many headaches.  
          In the long run, it saves you money, keeps your home running efficiently, increases your homes value, and provides peace of mind know you have your exterior under control. 
          </p>

          <div className="about-us flex flex-wrap w-full">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service ">
              <span className="icon_info">i</span>
              <h3 className="text-center text-3xl mb-6">Repair</h3>
                <p className="text-left"> Taking care of the small problems when you see them makes it so you do not have the problem worsen and develop into a bigger issue over time.
                </p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
              <span className="icon_info">i</span>
              <h3 className="text-center text-3xl mb-6">Replace</h3>
                <p className="text-left">
                  Not sure if you need a replacement or a repair? Call Darwins Property Solutions now for a free and trustworthy quote from one of our experts. 
                </p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
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
          <h3 className="text-3xl mb-6">Vinyl Siding</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> No project is too big or too small for Darwins Property Solutions. We have worked with a veriety of customers on residential, industrial, and commercial projetcs.</p>
				</div>
      </section>
      
      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Window Replacement & Skylight Installation</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> No project is too big or too small for Darwins Property Solutions. We have worked with a veriety of customers on residential, industrial, and commercial projetcs.</p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Insulation</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> No project is too big or too small for Darwins Property Solutions. We have worked with a veriety of customers on residential, industrial, and commercial projetcs.</p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Painting</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> No project is too big or too small for Darwins Property Solutions. We have worked with a veriety of customers on residential, industrial, and commercial projetcs.</p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Downspout & Gutter Installation & Repair</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> No project is too big or too small for Darwins Property Solutions. We have worked with a veriety of customers on residential, industrial, and commercial projetcs.</p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Chimney Repair</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> No project is too big or too small for Darwins Property Solutions. We have worked with a veriety of customers on residential, industrial, and commercial projetcs.</p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Cement Slabs & Sidewalks</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> No project is too big or too small for Darwins Property Solutions. We have worked with a veriety of customers on residential, industrial, and commercial projetcs.</p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Landscaping</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> No project is too big or too small for Darwins Property Solutions. We have worked with a veriety of customers on residential, industrial, and commercial projetcs.</p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Snow Removal</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> No project is too big or too small for Darwins Property Solutions. We have worked with a veriety of customers on residential, industrial, and commercial projetcs.</p>
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

ExteriorServices.propTypes = {
  data: PropTypes.object,
}

export default ExteriorServices;
