import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />

      <div className="w-full py-24 px-6 bg-fixed gradient bg-no-repeat bg-bottom relative z-10 h-lg">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-100">About Us</h1>
        </div>
      </div>

      <section className="services-page bg-white border-b py-12">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto text-left flex flex-wrap items-start md:flex-no-wraps">
          <div className="flex flex-wrap my-8">
            <div className="w-5/6 sm:w-1/2 p-2">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Get In Touch</h3>
              <p className="text-gray-600 mb-2">Please fill out our form below and we will be in touch to answer any questions you have.<br /><br />
              </p>
              <form name="contact" method="POST" data-netlify="true">
                <p>
                  <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                  <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                  <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select></label>
                </p>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
            {/* <div className="w-full sm:w-1/2 p-2">
              <img className="w-full mx-auto" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800"/>
            </div> */}
          </div>
        </div>
      </section>

      
    </Layout>
  );
}

export default ContactPage;
