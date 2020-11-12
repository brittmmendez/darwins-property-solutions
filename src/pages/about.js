import React from "react";
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Reviews from "../components/reviews";

function AboutPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <div className="w-full py-24 px-6 bg-fixed gradient bg-no-repeat bg-bottom relative z-10 h-lg">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-100">About Us</h1>
        </div>
      </div>

      {/* <!--Services Section--> */}
      <section className="bg-white border-b py-12">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<h2 className="w-full my-8 text-4xl leading-tight">Our Team</h2>
				</div>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
       
          <div className="flex flex-wrap m-auto">
          <div className="h-auto md:w-1/3 px-4 mb-8">
            <div className="mb-8"><img className="rounded shadow-md" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800" alt=""/></div>
            <div><img className="rounded shadow-md" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800" alt=""/></div>
          </div>
          <div className="hidden md:block md:w-1/3 px-4 mb-8">
            <div className="bg-cover gradient bg-no-repeat rounded shadow-md" style={{height: "100%"}}></div>
          </div>
          <div className="h-auto md:w-1/3 px-4 mb-8">
            <div className="mb-8"><img className="rounded shadow-md" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800" alt=""/></div>
            <div><img className="rounded shadow-md" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800" alt=""/></div>
          </div>
          </div>
        </div>  
      </section>

      {/* <!--Services Section--> */}
      <section className="bg-white border-b py-12">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<h2 className="w-full my-2 text-4xl leading-tight">Our Values</h2>
				</div>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <div className="flex flex-wrap my-8">
            <div className="w-full sm:w-1/3 px-3">
              <h3 className="text-2xl font-bold leading-none mb-3">Lorem ipsum dolor sit amet</h3>
              <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
            <div className="w-full sm:w-1/3 px-3">
              <h3 className="text-2xl font-bold leading-none mb-3">Lorem ipsum dolor sit amet</h3>
              <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
            <div className="w-full sm:w-1/3 pl-3 px-3">
            <h3 className="text-2xl font-bold leading-none mb-3">Lorem ipsum dolor sit amet</h3>
              <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
          </div>
        </div>  
      </section>

      {/* <!--Reviews Section--> */}
      <section className="bg-white border-b py-12">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<h2 className="w-full text-center my-2 text-4xl font-bold leading-tight">What customers are saying!</h2>
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