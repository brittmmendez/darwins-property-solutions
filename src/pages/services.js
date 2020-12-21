import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import { Link } from "gatsby"
import exterior from "../images/exterior.png"

function RoofingPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Services"
      />
      
      <Header title="Our Services"/>

      {/* <!--Intro Section--> */}
			<section className="py-6">
        <div className=" text-center px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start flex-col-reverse md:flex-no-wraps">
					<h2 className="w-full my-8 text-l md:text-4xl leading-tight">
            Residential <span>&#183;</span> 
            {" "} Commericial <span>&#183;</span> 
            {" "} Industrial 
            </h2>
				</div>
				
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <p className="mb-8">Darwins Property Solutions is a full service construction provider, throughout the Ohio, Kentucky, and Indianna area. We work with residential, commercial, and industrial customers to find the solution and budget that will meet their needs. No matter how big or small a project might be, we build with care and precision from beginning to end. We specialize in a wide range of services from roofing, interior remodeling, and exterior repair and maintenance. Look no further than Darwins Property Solutions.  We’ve got you cover - from inside out and from the ground up. </p>
        </div>

        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
						<div>
						<h3 className="text-center md:text-left text-3xl mb-8 leading-tight">
								Roofing Services
							</h3>
							
							<p className="mb-5">Whether you need your roof replaced, repaired or inspected, you can trust that Darwins Property Solutions will take care of the job.</p>
 
							<p className="mb-5">We research and select only the finest and high quality materials for your roof repairs and replacements. Over the past decade, we have worked with many homeowners, small businesses, and corporate businesses to guarantee they can rest assured with our roofing services.</p>
						</div>
            <Link to="/roofing" 
					title="all services link"
					className="primary-btn inline-block px-8 py-4"
					>Learn More</Link>
					</div>
          <div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
						<div>
							<img src="http://images.ctfassets.net/1qq6mgrp27zi/5xivQAx3FhYLSLBAhmAbM3/d03fa5f5796852bd6adb01d66764c9dd/Image__9_.jpeg" className="vehicle-img w-full rounded shadow-md" alt="Vehicle with logo"/>
						</div>
					</div>
				</div>
        
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
        <div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
						<div>
							<img src="http://images.ctfassets.net/1qq6mgrp27zi/5CxQQq1YI7gDcPPR98fOec/42e1360f2a811813e4c372d9f2b59117/Image__1_.jpeg" className="vehicle-img w-full rounded shadow-md" alt="Vehicle with logo"/>
						</div>
					</div>
					<div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
						<div>
						<h3 className="text-center md:text-left text-3xl mb-8 leading-tight">
								Interior Remodeling
							</h3>
							
							<p className="mb-5">We are here to help you make your house become the home of your dreams or your office building become a more productive and welcoming atmostphere. Whether a new owner or settled in, we can help with any repair or remodeling needs you may have.</p>
							<p className="mb-5">If you’re interested in renovating a room or simply want a change of scenery, we have a portfolio of options to review. From a fresh coat of paint, to new hardwood flooring, and any repair inbetween.  We will work with you to make your interior designs come to life.</p>
						</div>
            <Link to="/interior-remodeling" 
					title="interior remodeling link"
					className="primary-btn inline-block px-8 py-4"
					>Learn More</Link>
					</div>
				</div>
			</section>
			
      
      <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
						<div>
						<h3 className="text-center md:text-left text-3xl mb-8 leading-tight">
								Exterior Services
							</h3>
							
							<p className="mb-5">The exterior of your house is crucial in the protection of your entire home or building. Though many people tend to focus the majority of their attention on the interior, it is just as important to keep the exterior regularly maintained. The exterior is exposed to rain, snow, ice, humidity, and other harsh weather.</p>
 
							<p className="mb-5">The current maintenance plays a big factor in determining the health and overall conditions of your entire structure. If the exterior is not properly maintained, other issues can be introduce including water damage, mold, or mildew, increase in energy bills and temperature irregularities.</p>
							
              <p className="mb-5">We offer a full list of exterior services to make sure your property is protected from the outside in.</p>
						</div>
            <Link to="/exterior-services" 
					title="all services link"
					className="primary-btn inline-block px-8 py-4"
					>Learn More</Link>
					</div>
          <div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
						<div>
							<img src={exterior} className="vehicle-img w-full rounded shadow-md" alt="Vehicle with logo"/>
						</div>
					</div>
				</div>
    </Layout>
  );
}

export default RoofingPage;
