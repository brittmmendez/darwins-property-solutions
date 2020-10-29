import React from "react";
import { navigate } from 'gatsby-link'
import Layout from "../components/layout";
import SEO from "../components/seo";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
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
      .then(() => console.log('form submitted'))
      .catch((error) => console.log(error))
  }

  render() {
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
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      Send
                    </button>
                  </div>
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
}