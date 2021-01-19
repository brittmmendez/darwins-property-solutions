import React from "react";
import { navigate } from 'gatsby-link'
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      isValidated: false,
      toggleModal: false 
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        this.setState({
          toggleModal: true
        })

      })
      .catch((error) => console.log(error))
      
      e.target[2].value="";
      e.target[3].value="";
      e.target[4].value="";
  }

  handleClick() {
    this.setState({
      toggleModal: false
    })
  }

  render() {
    return (
      <Layout>
        <SEO
          keywords={[`construction`, 'home remodeling', `roofing`, `interior`, `exterior`, "commericial services", "industrial services", "reseindential services", "painting"," landscaping", "flooring", "window installation"]}
          description ="Full service construction provider for residential, commercial, to industrial projects, contact page." 
          title="Contact"
        />

        <Header title="Contact Us"/>
        
        <section className="services-page border-b py-6">
          {this.state.toggleModal &&
            <div className="services-page-success-modal h-screen w-full flex flex-col items-center justify-center">
              <div className="h-screen w-full fixed flex items-center justify-center bg-modal z-10">
                <div className="bg-white shadow p-8 m-4 max-h-full text-center overflow-y-scroll">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold leading-none mb-3">Submitted!</h3>
                  </div>
                  <div className="mb-8">
                    <p className="text-black">Thank you for reaching out. We will be in touch with you shortly!</p>
                  </div>
                  <div className="flex justify-center">
                    <button onClick={() => this.handleClick()} className="inline-block primary-btn button px-8 py-4"
                      >Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }

        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
          <div className="w-full mx-auto text-left relative">
            <div className="m-auto my-8 text-center">
                <h3 className="text-3xl font-bold leading-none mb-3">Request a consultation</h3>
                <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field mb-6">
                    <label className="label hidden" htmlFor={'name'}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input border-solid border-gray-400 border-2 p-3 md:text-xl w-full" 
                        placeholder="Name"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field mb-6">
                    <label className="label hidden" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                        placeholder="Email"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field mb-6">
                    <label className="label hidden" htmlFor={'phone'}>
                      Phone
                    </label>
                    <div className="control">
                      <input
                        className="input border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                        placeholder="Phone"
                        type={'phone'}
                        name={'phone'}
                        onChange={this.handleChange}
                        id={'phone'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field mb-6">
                    <label className="label hidden" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        placeholder="Message"
                        className="textarea border-solid border-gray-400 border-2 p-3 md:text-xl w-full" 
                        name={'message'}
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="primary-btn button is-link inline-block px-8 py-4" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
            </div>
          </div>
					</div>
          <div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12361.435347962435!2d-84.4607462!3d39.2347252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1372ecdc05fcdbd0!2sDarwins%20Property%20Solutions!5e0!3m2!1sen!2sus!4v1611084988178!5m2!1sen!2sus" height="450" style={{width:"100%", border:"0"}} aria-hidden="false" tabIndex="0"/>
					</div>
				</div>
        </section>
      </Layout>
    );
  }
}