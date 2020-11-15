import React from "react"
import Carousel from 'nuka-carousel';
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"
import PageTitle from "./pageTitle"

export const query = graphql`
  query($slug: String!, $sliderGlob: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
    slider: allFile(
      filter: {
        sourceInstanceName: { eq: "portfolio" }
        dir: { glob: $sliderGlob }
      }
    ) {
      edges {
        node {
          id
          name
          dir
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const PortfolioTemplate = ({ data }) => {
  const mdx = data.mdx
  return (
    <Layout>
      <PageTitle title={mdx.frontmatter.title} />
      {data?.slider?.edges && data.slider.edges.length > 0 &&
        <Carousel>
          {data.slider.edges.map(image => (
            <Img key={image.node.childImageSharp.fluid.src} fluid={image.node.childImageSharp.fluid} style={{ margin: '3rem 0' }} />
          ))}
        </Carousel>
      }
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default PortfolioTemplate
