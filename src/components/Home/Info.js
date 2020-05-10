import React from "react"
import { Link } from "gatsby"
import Title from "../shared/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              error quis beatae corrupti nostrum, earum ducimus distinctio
              consectetur veniam laudantium quae at dolores, fugit ratione quo
              quos! Possimus minus et itaque amet suscipit quia qui.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>      
    </section>
  )
}
