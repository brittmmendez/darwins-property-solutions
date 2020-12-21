import React, { useState, useEffect } from "react";
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import exterior from "../images/exterior.png"
import PhotoSlider from "../components/PhotoSlider";

function AboutPage({data}) {
  let images = data.allCloudinaryMedia.nodes;
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <Header title="About Us"/>
      
      <section className="about-us py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto">
					<h2 className="w-full my-8 text-4xl leading-tight">Our Approach</h2>
				</div>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto">
          <p className="mb-8">As a full service construction provider for residential, commercial, to industrial projects, Darwins Property Solutions understands how important it is for projects to be completed successfully, on time, and on budget. Our company was founded on the commitment to excellence that we bring to each project. We communicate thoroughly throughout our project in order to provide timely, accurate, and high quality solutions. Our hands-on approach sets us apart from other construction companies in the area and helps us to reach our goal of delivering best in class construction projects.</p>
        </div>
      
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto">
          <PhotoSlider data={images}/>
        </div>
      </section>

      <section className="pt-6 pb-12">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h2 id="industrial" className="w-full my-8 text-4xl leading-tight">Our Project Types</h2>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> No project is too big or too small for Darwins Property Solutions. We have worked with a veriety of customers on residential, industrial, and commercial projetcs.
					</p>

          <div className="about-us flex flex-wrap w-full">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded">
                <span className="icon_info">i</span>
                <h3 className="m-2 text-center text-3xl">Industrial</h3>
                <ul className="mb-8 text-left">
                  <li>Senior living and independent living</li>
                  <li>Senior care and nursing facilities</li>
                  <li>Commercial construction</li>
                  <li>Institutional construction</li>
                </ul>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded">
                <span className="icon_info">i</span>
                <h3 className="m-2 text-center text-3xl">Commercial</h3>
                <ul className="mb-8 text-left">
                  <li>Senior living and independent living</li>
                  <li>Senior care and nursing facilities</li>
                  <li>Commercial construction</li>
                  <li>Institutional construction</li>
                  <li>Student housing and facilities</li>
                </ul>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded">
                <span className="icon_info">i</span>
                <h3 className="m-2 text-center text-3xl">Residential</h3>
                <ul className="mb-8 text-left">
                  <li>Mixed-use residential and commercial construction</li>
                  <li>Multi-family residential housing</li>
                  <li>Single-family residential housing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>  
      </section>
    
      <section className="py-8 md:pb-12">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h2 id="industrial" className="w-full my-8 text-4xl leading-tight">Our Services</h2>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
				  <p className="mb-5"> We have trained specialists who are ready to provide you with high quality services that include interior remodling, painting, exterior roofing repairs and replacements, replacement windows, siding, ventilation, insulation, chimney repairs, concrete slabs and more.  We can begin at any phase of a project and work on residential, industrial, and commercial projetcs year round.</p>
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2 relative">
            <div className="parent">
              <Link to="/roofing" title="roofing link">
                <img src="https://res.cloudinary.com/dwk6itwu5/image/upload/v1608433927/Photos/roofing/Image_9_z9bbiq.jpg" className="services-img w-full h-64 object-cover mb-6 rounded shadow-md" alt="Residential property"/>
              </Link>
            </div>
						<Link to="/roofing" title="roofing link" className="title-overlay my-4 text-3xl flex flex-col items-center justify-center px-2 absolute">
              Roofing Services
						</Link>
					</div>
					
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2 relative">
						<div className="parent">
							<Link to="/interior-remodeling" title="interior link">
								<img src="https://res.cloudinary.com/dwk6itwu5/image/upload/v1608433969/Photos/interior/Image_1_wtm9h1.jpg" className="services-img w-full h-64 object-cover mb-6 rounded shadow-md" alt="Commercial property"/>
							</Link>
						</div>
						<Link to="/interior-remodeling" title="interior link" className="title-overlay text-3xl my-4 flex flex-col items-center justify-center px-2 absolute">Interior Remodeling
						</Link>
					</div>

					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2 relative">
            <div className="parent">
              <Link to="/exterior-services"  title="industrial link">
                <img src={exterior} className="services-img w-full h-64 object-cover mb-6 rounded shadow-md" alt="Indestrial property"/>
              </Link>
            </div>

            <Link to="/exterior-services" title="industrial link" className="title-overlay text-3xl my-4 flex flex-col items-center justify-center px-2 absolute">Exterior Services</Link>
          </div>
				</div>

				<div className="container max-w-4xl mx-auto text-center pt-12">
					<Link to="/services" 
            title="all services link"
            className="primary-btn inline-block px-8 py-4"
					  >See All Services
          </Link>
				</div>
      </section>
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

AboutPage.propTypes = {
  data: PropTypes.object,
}

export default AboutPage;