import React from "react"
import Title from "../shared/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/mzbjzrnv" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Email</label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
