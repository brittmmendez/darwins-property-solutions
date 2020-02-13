import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      {/* <!--Hero--> */}
<div className="pt-24 pb-20 bg-fixed gradient text-white" >

	<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
		{/* <!--Left Col--> */}
		<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
			<p className="uppercase tracking-loose w-full">What business are you?</p>
			<h1 className="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
			<p className="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>
			<Link to="/about" title="" className="mx-auto"> 
				<button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold my-6 py-4 px-8 shadow-lg">Our Values</button>
			</Link>
		</div>
	</div>
	{/* <!--/Left Col--> */}
</div>


{/* <!--Services Section--> */}
<section className="bg-white border-b py-8">
	<div className="container max-w-5xl mx-auto m-8">
		<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Services</h1>
		<div className="w-full mb-4">	
			<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		</div>
	
		<div className="flex flex-wrap my-8">
			<div className="w-5/6 sm:w-1/2 p-6">
				<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Lorem ipsum dolor sit amet</h3>
				<p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.<br /><br />
				</p>
				
			</div>
			<div className="w-full sm:w-1/2 p-6">
				<img className="w-full mx-auto" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800"/>
			</div>
		</div>
		
		
		<div className="flex flex-wrap flex-col-reverse sm:flex-row my-8">	
			<div className="w-full sm:w-1/2 p-6 mt-6">
				<img className="w-full mx-auto" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800"/>
			</div>
			<div className="w-full sm:w-1/2 p-6 mt-6">
				<div className="align-middle">
					<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Lorem ipsum dolor sit amet</h3>
					<p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.<br /><br />
          </p>
				</div>
			</div>

		</div>

		<div className="flex flex-wrap my-8">
			<div className="w-5/6 sm:w-1/2 p-6">
				<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Lorem ipsum dolor sit amet</h3>
				<p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.<br /><br />
				</p>
				
			</div>
			<div className="w-full sm:w-1/2 p-6">
				<img className="w-full mx-auto" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800"/>
			</div>
		</div>
		<div className="flex items-center justify-center">
			<Link to="services" title=""> 
				<button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold my-6 py-4 px-8 shadow-lg">See All Services</button>
			</Link>
		</div>
	</div>
	
</section>
	{/* <!--/Services Section-->	 */}
		

    		
{/* <!--Guarantee Section--> */}
<section className="bg-white border-b py-8">
	<div className="container mx-auto flex flex-wrap pt-4 pb-12">
		<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Our Guarantee</h1>
		<div className="w-full mb-4">	
			<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		</div>
	
		<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
			<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
				<div>
					<p className="w-full text-gray-600 text-xs md:text-sm px-6">
						<svg className="h-20 mx-auto mb-10" id="icon-wrench" viewBox="0 0 383 383" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 316c0 15 6 29 16 40l12 11c10 11 24 16 39 16s29-5 40-16l115-115a128 128 0 0 0 161-124c0-18-3-35-10-51l-1-1v-1l-1-2-1-1-1-1-2-1-1-1-1-1-1-1h-3l-2-1h-3l-2 1h-1l-2 1h-1l-1 1-2 1-1 1-68 68-33-34 67-68 1-1 1-1 1-2 1-1v-2l1-1v-1-2-1-2l-1-2v-1l-1-1v-2l-1-1-1-1-1-1-2-1-1-1-1-1h-1a128 128 0 0 0-175 150L16 276a56 56 0 0 0-16 40zM255 32l16 1-49 49a32 32 0 0 0 0 46l34 34a32 32 0 0 0 45 0l49-49 1 15a96 96 0 0 1-128 90 96 96 0 0 1 32-186zM39 299l106-106 1 2 6 8 3 4c6 8 13 15 21 22l4 2 9 6 1 1L84 344c-9 9-25 10-34 0l-11-11a24 24 0 0 1 0-34zm0 0"></path>
						</svg>
					</p>
					<div className="w-full font-bold text-xl text-gray-800 px-6">Lorem ipsum dolor sit amet.</div>
					<p className="text-gray-800 text-base px-6 mb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
					</p>
				</div>
			</div>
			<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
				<div className="flex items-center justify-center">
				<Link to="/about" title=""> 
					<button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold my-6 py-4 px-8 shadow-lg">Action</button>
				</Link>
				</div>
			</div>
		</div>
		
		
		
		<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
			<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
				<div>
					<p className="w-full text-gray-600 text-xs md:text-sm px-6">
						<svg className="h-20 mx-auto mb-10" id="icon-paint" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M18 1h-8a3 3 0 0 0-3 3H6a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h6a1 1 0 0 1 1 1v1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2v-1a3 3 0 0 0-3-3H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm-3 16v4h-2v-4zm4-11a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z"></path>
						</svg>
					</p>
					<div className="w-full font-bold text-xl text-gray-800 px-6">Lorem ipsum dolor sit amet.</div>
					<p className="text-gray-800 text-base px-6 mb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
					</p>
				</div>
			</div>
			<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
				<div className="flex items-center justify-center">
					<Link to="/about" title=""> 
						<button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold my-6 py-4 px-8 shadow-lg">Action</button>
					</Link>
				</div>
			</div>
		</div>
		
		<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
			<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
				<div>
					<p className="w-full text-gray-600 text-xs md:text-sm px-6">
						<svg className="h-20 mx-auto mb-10" id="icon-paint" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M18 1h-8a3 3 0 0 0-3 3H6a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h6a1 1 0 0 1 1 1v1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2v-1a3 3 0 0 0-3-3H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm-3 16v4h-2v-4zm4-11a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z"></path>
						</svg>
					</p>
					<div className="w-full font-bold text-xl text-gray-800 px-6">Lorem ipsum dolor sit amet.</div>
					<p className="text-gray-800 text-base px-6 mb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
					</p>
				</div>
			</div>
			<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
				<div className="flex items-center justify-center">
					<Link to="/about" title=""> 
						<button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold my-6 py-4 px-8 shadow-lg">Action</button>
					</Link>
				</div>
			</div>
		</div>
	</div>

</section>
{/* <!--/Guarantee Section--> */}

{/* <!--Action Area--> */}
<div className="py-16 gradient" >
	<section className="container mx-auto text-center py-6 mb-12">
		<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Ready to Build?</h1>
		<div className="w-full mb-4">	
			<div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
		</div>
		<h3 className="my-4 text-3xl leading-tight text-white">Main Hero Message to sell yourself!</h3>	

		<button className="mx-auto lg:mx-2 hover:underline bg-white text-gray-800 font-bold my-6 py-4 px-8 shadow-lg">Call Us</button>
		<button className="mx-auto lg:mx-2 hover:underline bg-white text-gray-800 font-bold my-6 py-4 px-8 shadow-lg">Email Us</button>
	</section>
</div>
{/* <!--/Action Area--> */}












    </Layout>
  );
}

export default IndexPage;
