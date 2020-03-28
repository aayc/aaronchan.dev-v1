import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "language.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img
           style={{maxWidth: 140,  position: "relative", zIndex: 10, boxShadow: "10px 15px 60px hsla(10, 10%, .1)"}}
           fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
