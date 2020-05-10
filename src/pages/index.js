import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundImage from "../components/shared/BackgroundImage"
import Info from "../components/Home/Info"
import Footer from '../components/Footer'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage
      title="Latte Larry's"
      img={data.img.childImageSharp.fluid}
      styleClass="default-background"
    />
    <Info />
    <Footer />
  </Layout>
)

export const data = graphql`
  query backgroundImage {
    img: file(relativePath: { eq: "close-up-of-coffee-cup.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
