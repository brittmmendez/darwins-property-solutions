import React from "react";
import { Link } from "gatsby"
import logo from "../images/logo2.png"

function Footer() {
  return (
    <div>
      {/* <!--Action Area--> */}
      <div className="py-16 free-quote" >
        <section className="container mx-auto text-center py-6 mb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">CALL US TODAY FOR A FREE QUOTE</h2>
          <div className="w-full mb-4">	
            <div className="h-1 mx-auto  w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <h3 className="my-4 text-3xl leading-tight text-white">
            <a  href="tel:5134886021" title="phone number">513-488-6021</a>
          </h3>	
        </section>
      </div>
      {/* <!--/Action Area--> */}
      
      <footer className="relative text-gray-800 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-1/6 lg:mx-4 lg:pr-8">
            <Link to="/" title="" className="opacity-75 hover:opacity-100">
            <img
              alt="logo"
              className="logo"
              src={logo}
            />
            </Link>
          </div>

          <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
            <h5 className="uppercase tracking-wider font-semibold ">Learn More</h5>
            <ul className="mt-4">
              <li className="mt-2"><Link to="/about" title="About" className="opacity-75 hover:opacity-100">About Us</Link></li>
              <li className="mt-2"><Link to="/services" title="Services" className="opacity-75 hover:opacity-100">Our Services</Link></li>
              <li className="mt-2"><Link to="/photo-gallery" title="Photo Gallery" className="opacity-75 hover:opacity-100">Photo Gallery</Link></li>
            </ul>
          </div>

          <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
            <h5 className="uppercase tracking-wider font-semibold ">Contact Details</h5>
            <ul className="mt-4">
              <li>
                <a href="https://goo.gl/maps/TAM9enEZsrrBUSng9" target="_blank" rel="noopener noreferrer" title="google-maps" className="block flex items-center opacity-75 hover:opacity-100">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      className="fill-current">
                      <path
                        d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                    </svg>
                  </span>
                  <span className="ml-3">
                    559 N Wayne Ave., Cincinnati, OH 45215
                  </span>
                </a>
              </li>
              <li className="mt-4">
                <div title="" className="block flex items-center opacity-75 hover:opacity-100">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      className="fill-current">
                      <path
                        d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                      <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" /></svg>
                  </span>
                  <span className="ml-3">
                    Mon - Fri: 9:00 - 5:00<br/>
                    Closed on Weekends
                  </span>
                </div>
              </li>
              <li className="mt-4">
                <a href="tel:5134886021" title="phone number" className="block flex items-center opacity-75 hover:opacity-100">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      className="fill-current">
                      <path
                        d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                    </svg>
                  </span>
                  <span className="ml-3">
                  513-488-6021
                  </span>
                </a>
              </li>
              <li className="mt-4">
                <a href="mailto:darwin@darwinspropertysolutions.com" title="" className="block flex items-center opacity-75 hover:opacity-100">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      className="fill-current">
                      <path
                        d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
                    </svg>
                  </span>
                  <span className="ml-3">
                  darwin@darwinspropertysolutions.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4">
            <h5 className="uppercase tracking-wider font-semibold ">Social</h5>
            <ul className="my-4 flex">
              <li>
                <a href="https://www.facebook.com/Darwins-Property-Solutions-101514971798704" target="_blank" rel="noopener noreferrer" title="facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path
                      d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                  </svg>
                </a>
              </li>

              <li className="ml-6">
                <a href="https://www.instagram.com/darwinspropertysolutions/" target="_blank" rel="noopener noreferrer" title="instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path
                      d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
                    <circle cx="11.994" cy="11.979" r="3.003" /></svg>
                </a>
              </li>
            </ul>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12361.435347962435!2d-84.4607462!3d39.2347252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1372ecdc05fcdbd0!2sDarwins%20Property%20Solutions!5e0!3m2!1sen!2sus!4v1611084988178!5m2!1sen!2sus" style={{border:"0"}} aria-hidden="false" tabIndex="0"/>

          </div>
        </div>
        <p className="text-sm mt-12">© 2020 Darwins Property Solutions. All Rights Reserved.
        Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip" target="_blank" rel="noopener noreferrer">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer"> www.flaticon.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
