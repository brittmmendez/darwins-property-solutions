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
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-100">Photo Gallery</h1>
        </div>
      </div>
				
			<div className="py-16 my-2">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2">
						<h2 className="text-2xl leading-tight mb-2">Roofing</h2>
						<img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800" className="w-full h-64 object-cover mb-6" />
					</div>
					
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2">
						<h2 className="text-2xl leading-tight mb-2">Roofing</h2>
						<img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800" className="w-full h-64 object-cover mb-6" />
					</div>
					
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2">
						<h2 className="text-2xl leading-tight mb-2">Roofing</h2>
						<img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800" className="w-full h-64 object-cover mb-6" />
					</div>
				</div>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2">
						<h2 className="text-2xl leading-tight mb-2">Roofing</h2>
						<img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800" className="w-full h-64 object-cover mb-6" />
					</div>
					
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2">
						<h2 className="text-2xl leading-tight mb-2">Roofing</h2>
						<img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800" className="w-full h-64 object-cover mb-6" />
					</div>
					
					<div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-2">
						<h2 className="text-2xl leading-tight mb-2">Roofing</h2>
						<img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800" className="w-full h-64 object-cover mb-6" />
					</div>
				</div>
      </div>
    </Layout>
  );
}

export default ContactPage;
