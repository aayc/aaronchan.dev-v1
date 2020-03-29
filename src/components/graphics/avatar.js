import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portrait0.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img
           style={{borderRadius: "50%", maxWidth: 200, position: "relative", zIndex: 10, boxShadow: "10px 15px 60px hsla(10, 10%, .1)"}}
           fluid={data.placeholderImage.childImageSharp.fluid} />


}

export default Image
