import React, { useState, useEffect } from "react";
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Reviews from "../components/reviews";
import Header from "../components/header";
import exterior from "../images/exterior.png"

function AboutPage({ data }) {

  const status = useScript(
    'https://apps.elfsight.com/p/platform.js'
  );

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <Header title="About Us"/>
      
      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<h2 className="w-full my-8 text-4xl leading-tight">Our Approach</h2>
				</div>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <p className="mb-8">As a full service construction provider for residential, commercial, to industrial projects, Darwins Property Solutions understands how important it is for projects to be completed successfully, on time, and on budget. Our company was founded on the commitment to excellence that we bring to each project. We communicate thoroughly throughout our project in order to provide timely, accurate, and high quality solutions. Our hands-on approach sets us apart from other construction companies in the area and helps us to reach our goal of delivering best in class construction projects.</p>
        </div>
      
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap md:flex-no-wraps">
          <div className="flex flex-wrap m-auto">
          <div className="h-auto md:w-1/2 px-4 mb-8">
              <div className="mb-8"><img className="rounded shadow-md about-img" src="https://images.ctfassets.net/1qq6mgrp27zi/7ukV4Fa6sr0hxTrvGeRC7a/450bd1cb3f7a225cec440c530bea77a7/Image__6_.jpeg?w=800" alt="rooding project"/></div>
            </div>
            <div className="h-auto md:w-1/2 px-4 mb-8">
              <div className="mb-8"><img className="rounded shadow-md about-img" src="https://images.ctfassets.net/1qq6mgrp27zi/365B0z5qTsfLIkUpT7jf9D/6e63bd2119c43310585f5f153a31110b/Image__1_.jpeg?w=800" alt="sidewalk"/></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-12">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h2 id="industrial" className="w-full my-8 text-4xl leading-tight">Our Services</h2>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
				<p className="mb-5"> We have trained specialists who are ready to provide you with high quality services that include interior remodling, painting, exterior roofing repairs and replacements, replacement windows, siding, ventilation, insulation, chimney repairs, concrete slabs and more.  We can begin at any phase of a project and work on residential, industrial, and commercial projetcs year round.</p>
				<p className="mb-5"> Darwins Property Solutions is committed to working with you in order to find the best solution and budget for your project</p>
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2 relative">
					<div className="parent">
						<Link to="/roofing" title="roofing link">
							<img src="http://images.ctfassets.net/1qq6mgrp27zi/5xivQAx3FhYLSLBAhmAbM3/d03fa5f5796852bd6adb01d66764c9dd/Image__9_.jpeg" className="services-img w-full h-64 object-cover mb-6 rounded shadow-md" alt="Residential property"/>
						</Link>
					</div>
						<Link to="/roofing" title="roofing link" className="title-overlay my-4 text-3xl flex flex-col items-center justify-center px-2 absolute">Roofing Services
						</Link>
					</div>
					
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2 relative">
						<div className="parent">
							<Link to="/interior-remodeling" title="interior link">
								<img src="http://images.ctfassets.net/1qq6mgrp27zi/5CxQQq1YI7gDcPPR98fOec/42e1360f2a811813e4c372d9f2b59117/Image__1_.jpeg" className="services-img w-full h-64 object-cover mb-6 rounded shadow-md" alt="Commercial property"/>
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

				<div className="container max-w-4xl mx-auto text-center pt-12 pb-10">
					<Link to="/services" 
					title="all services link"
					className="primary-btn inline-block px-8 py-4"
					>See All Services</Link>
				</div>
     
     
      </section>


      <section className="border-b pt-6 pb-20">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h2 id="industrial" className="w-full my-8 text-4xl leading-tight">Our Project Types</h2>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> No project is too big or too small for Darwins Property Solutions. We have worked with a veriety of customers on residential, industrial, and commercial projetcs.
					</p>

          <div className="about-us flex flex-wrap w-full">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service ">
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
              <div className="box_service">
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
              <div className="box_service">
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

      {/* <!--Reviews Section--> */}
      <section className="border-b py-20">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<h3 className="w-full text-center my-2 text-4xl font-bold leading-tight">Customer Reviews</h3>
				</div>

        <div className="elfsight-app-ea49b8b7-fe5c-44e6-b54e-668a6e503a08"></div>
        {/* <div className="text-center px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps my-8">
          <Reviews data={data}/>
        </div> 
          <div className="text-center">
              <a href="https://g.page/DarwinsPropertySolutions/review?rc" target="_blank" rel="noopener noreferrer" title="google-reviews">
                <button className="primary-btn inline-block mt-8 px-8 py-4"> Write a Review </button>
              </a>
            </div>  */}
      </section>
    </Layout>
  );
}

export default AboutPage;

export const query = graphql`
 query {
	allContentfulReviewGallery {
    edges {
      node {
        review {
          review {
            review
          }
          customer
        }
      }
    }
  }
}
`

AboutPage.propTypes = {
  data: PropTypes.object,
}


// Hook
function useScript(src) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? "loading" : "idle");
debugger
  useEffect(
    () => {
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!src) {
        setStatus("idle");
        return;
      }

      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let script = document.querySelector(`script[src="${src}"]`);

      if (!script) {
        // Create script
        script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        // Add script to document body
        document.body.appendChild(script);

        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event) => {
          script.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          );
        };

        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute("data-status"));
      }

      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event) => {
        setStatus(event.type === "load" ? "ready" : "error");
      };

      // Add event listeners
      script.addEventListener("load", setStateFromEvent);
      script.addEventListener("error", setStateFromEvent);

      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
        }
      };
    },
    [src] // Only re-run effect if script src changes
  );

  return status;
}
