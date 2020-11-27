import React from "react";
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Reviews from "../components/reviews";
import Header from "../components/header";

function AboutPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <Header title="About Us"/>

      {/* <!--Services Section--> */}
      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<h2 className="w-full my-8 text-4xl leading-tight">Our Approach</h2>
				</div>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <p className="mb-8">As a full service construction provider, Darwins Property Solutions understands how important it is for projects to be completed successfully, on time, and on budget.  Our company was founded on the commitment to excellence that we bring to each project. We communicate thoroughly throughout our project in order to provide timely, accurate, and high quality solutions. Our hands-on approach sets us apart from other construction companies in the area and helps us to reach our goal of delivering best in class construction projects.</p>

          <div className="flex flex-wrap m-auto">
          <div className="h-auto md:w-1/2 px-4 mb-8">
            <div className="mb-8"><img className="rounded shadow-md" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800" alt="sidewalk"/></div>
          </div>
          <div className="h-auto md:w-1/2 px-4 mb-8">
            <div className="mb-8"><img className="rounded shadow-md" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800" alt="rooding project"/></div>
          </div>
           
          </div>
        </div>  
      </section>

      {/* <!--Values Section--> */}
      <section className="border-b py-20">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<h2 className="w-full my-2 text-4xl leading-tight">Our Projects</h2>
				</div>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap md:flex-no-wraps">
          <div className="our-projects flex flex-wrap w-full my-8">
            <div className="w-full sm:w-1/3 px-3">
              <h3 className="text-2xl font-bold leading-none mb-3">Industrial</h3>
                <ul className="mb-8 text-white">
                  <li>Senior living and independent living</li>
                  <li>Senior care and nursing facilities</li>
                  <li>Commercial construction</li>
                  <li>Institutional construction</li>
                </ul>
            </div>
            <div className="w-full sm:w-1/3 px-3">
              <h3 className="text-2xl font-bold leading-none mb-3">Commercial</h3>
                <ul className="mb-8 text-white">
                  <li>Senior living and independent living</li>
                  <li>Senior care and nursing facilities</li>
                  <li>Commercial construction</li>
                  <li>Institutional construction</li>
                  <li>Student housing and facilities</li>
                </ul>
            </div>
            <div className="w-full sm:w-1/3 pl-3 px-3">
            <h3 className="text-2xl font-bold leading-none mb-3">Residential</h3>
                <ul className="mb-8 text-white">
                  <li>Mixed-use residential and commercial construction</li>
                  <li>Multi-family residential housing</li>
                  <li>Single-family residential housing</li>
                </ul>
            </div>
          </div>
          <p className="mb-8">Darwins Property Solutions can begin at any phase of a project. See a full list of our services here or call us to get started today at: 555-555-5555</p>
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
	allContentfulReviewCarousel {
    edges {
      node {
        review {
          contact
          review {
            review
          }
        }
      }
    }
  }
}
`

AboutPage.propTypes = {
  data: PropTypes.object,
}