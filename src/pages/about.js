import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundImage from "../components/shared/BackgroundImage"
import Info from "../components/Home/Info"
import Footer from '../components/Footer'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundImage
      title="About us"
      img={data.img.childImageSharp.fluid}
      styleClass="about-background"
    />
    <Info />
    
  </Layout>
)

export const data = graphql`
  query aboutImage {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
