import React from "react"
import Image from "gatsby-image"
export default function Product({ price, title, image }) {
  console.log(image)
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Image fluid={image.childImageSharp.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{title}</h6>
          <h6>${price}</h6>
          <button className="btn btn-yellow mt-3 text-capitalize">
            add to cart
          </button>
        </div>

      </div>
    </div>
  )
}
