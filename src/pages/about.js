import React from "react";
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Reviews from "../components/reviews";
import Header from "../components/header";
import screwdriver from "../images/svg/024-screwdriver.svg"
import shovel from "../images/svg/029-shovel-1.svg"
import paintroller from "../images/svg/018-paint-roller.svg"
import measuringtape from "../images/svg/016-measuring-tape.svg"
import doublewrench from "../images/svg/008-double-wrench.svg"
import wrench from "../images/svg/006-plier.svg"

function AboutPage({ data }) {
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
          <p className="mb-8">As a full service construction provider, Darwins Property Solutions understands how important it is for projects to be completed successfully, on time, and on budget. Our company was founded on the commitment to excellence that we bring to each project. We communicate thoroughly throughout our project in order to provide timely, accurate, and high quality solutions. Our hands-on approach sets us apart from other construction companies in the area and helps us to reach our goal of delivering best in class construction projects.</p>
          <p className="mb-8">From residential, commercial, to industrial, Darwins Property Solutions has a track record of successful construction projects throughout the Ohio, Kentucky, and Indianna area. We are proud to feature photos of our recent projects in our photo gallary.</p>
        </div>
      
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap md:flex-no-wraps">
          <div className="flex flex-wrap m-auto">
            <div className="h-auto md:w-1/2 px-4 mb-8">
              <div className="mb-8"><img className="rounded shadow-md about-img" src="https://images.ctfassets.net/1qq6mgrp27zi/2MAG8U1OyyuQ4eTAUvOdCI/780fb8b19771294f460d877bd4519a15/Image__2_.jpeg?w=800" alt="sidewalk"/></div>
            </div>
            <div className="h-auto md:w-1/2 px-4 mb-8">
              <div className="mb-8"><img className="rounded shadow-md about-img" src="https://images.ctfassets.net/1qq6mgrp27zi/6FC6fUVErdNCRn1MMbWeAX/1cc4ed85d7336a1a351ed47fa0b9dbaf/Image__2_.jpeg?w=800" alt="rooding project"/></div>
            </div>
          </div>
       
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

      <section className="border-b pt-6 pb-20">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h2 id="industrial" className="w-full my-8 text-4xl leading-tight">Our Projects</h2>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <div className="about-us flex flex-wrap w-full">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service ">
                <span className="icon_info">i</span>
                <div> <img src={screwdriver} alt="screwdriver icon"/></div>
                <h3 className="m-2">Industrial</h3>
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
                <div> <img src={shovel} alt="shovel icon" /></div>
                <h3 className="m-2">Commercial</h3>
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
                <div> <img src={paintroller} alt="paintroller icon"/></div>
                <h3 className="m-2">Residential</h3>
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
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps my-8">
          <Reviews data={data}/>
        </div>  
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