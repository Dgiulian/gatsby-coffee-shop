import React from "react"
import Image from "gatsby-image"
export default function Product({ id, price, title, image }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Image fluid={image.childImageSharp.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{title}</h6>
          <h6>${price}</h6>
          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={id}
            data-item-price={price}
            data-item-name={title}
            data-item-image={image.childImageSharp.fluid.src}
            data-item-url={`${process.env.SITE_URL}`}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
