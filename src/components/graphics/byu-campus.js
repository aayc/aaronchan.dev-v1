import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "BYU_Campus_North.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img
           style={{maxHeight: 400,
                   position: "relative",
                   zIndex: 10,
                   boxShadow: "0 0 8px 8px white inset",
            }}
           fluid={data.placeholderImage.childImageSharp.fluid} />


}

export default Image
