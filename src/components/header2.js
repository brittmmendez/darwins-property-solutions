import React, { Component } from 'react';
import { Link } from "gatsby"

class Header extends Component {
	componentDidMount(){
		var scrollpos = window.scrollY;
		var header = document.getElementById("header");
		var navcontent = document.getElementById("nav-content");
		var navaction = document.getElementById("navAction");
		var brandname = document.getElementById("brandname");
		var toToggle = document.querySelectorAll(".toggleColour");

		document.addEventListener('scroll', function() {

		/*Apply classes for slide in bar*/
		scrollpos = window.scrollY;

			if(scrollpos > 10){
				header.classList.add("bg-white");
			navaction.classList.remove("bg-white");
			navaction.classList.add("gradient");
			navaction.classList.remove("text-gray-800");
			navaction.classList.add("text-white");
			//Use to switch toggleColour colours
				for (var i = 0; i < toToggle.length; i++) {
				toToggle[i].classList.add("text-gray-800");
			toToggle[i].classList.remove("text-white");
			}
			header.classList.add("shadow");
			navcontent.classList.remove("bg-gray-100");
			navcontent.classList.add("bg-white");
			}
			else {
			header.classList.remove("bg-white");
			navaction.classList.remove("gradient");
			navaction.classList.add("bg-white");
			navaction.classList.remove("text-white");
			navaction.classList.add("text-gray-800");
			//Use to switch toggleColour colours
				for (var i = 0; i < toToggle.length; i++) {
				toToggle[i].classList.add("text-white");
			toToggle[i].classList.remove("text-gray-800");
			}
			
			header.classList.remove("shadow");
			navcontent.classList.remove("bg-white");
			navcontent.classList.add("bg-gray-100");
			
			}

		});


		var navMenuDiv = document.getElementById("nav-content");
		var navMenu = document.getElementById("nav-toggle");

		document.onclick = check;
		function check(e){
			var target = (e && e.target) || (event && event.srcElement);
			
			//Nav Menu
			if (!checkParent(target, navMenuDiv)) {
			// click NOT on the menu
			if (checkParent(target, navMenu)) {
				// click on the link
				if (navMenuDiv.classList.contains("hidden")) {
				navMenuDiv.classList.remove("hidden");
				} else {navMenuDiv.classList.add("hidden");}
			} else {
				// click both outside link and outside menu, hide menu
				navMenuDiv.classList.add("hidden");
			}
			}
			
		}
		function checkParent(t, elm) {
			while(t.parentNode) {
			if( t == elm ) {return true;}
			t = t.parentNode;
			}
			return false;
		}
	}

	render() {
		return (
    <nav id="header" className="fixed w-full z-30 top-0 text-white">

	<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
			
		<div className="pl-4 flex items-center">
			<Link className="toggleColour text-gray-800 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  to="/"> 
				TITLE
			</Link>
		</div>

		<div className="block lg:hidden pr-4">
			<button id="nav-toggle" className="flex items-center p-1 text-black hover:text-gray-900">
				<svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
			<ul className="list-reset lg:flex justify-end flex-1 items-center">
				<li className="mr-3">
					<Link className="inline-block py-2 px-4 text-black no-underline" to="/about">About Us</Link>
				</li>
				<li className="mr-3">
					<Link className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to="/services">Our Services</Link>
				</li>
				<li className="mr-3">
					<Link className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to="/photo-gallery">Recent Pojects</Link>
				</li>
			</ul>
			<Link to="/contact">
				<button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">Contact Us</button>
			</Link>
		</div>
	</div>
	
	<hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>
  );
	}
}

export default Header;