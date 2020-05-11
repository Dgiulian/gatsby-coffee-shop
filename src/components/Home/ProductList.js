import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../shared/Title"
import Product from "./Product"

const productQuery = graphql`
  query ProductList {
    products: allStrapiProduct {
      nodes {
        id
        price
        title
        image {
          childImageSharp {
            fluid(maxHeight: 426) {
              src
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default function ProductList() {
  const { products } = useStaticQuery(productQuery)
  console.log(products)
  return (
    <section className="container">
      <Title title="our products" />
      <div className="row">
        {products.nodes.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
