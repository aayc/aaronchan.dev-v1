import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { graphql } from "gatsby"

function parseDate(s) {
  const date = Date.parse(s)
  const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
  const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(date)
  return `${mo} ${da} ${ye}`
}

export default function Template({
  data,
}) {
  const { markdown, posts } = data
  const { frontmatter, html } = markdown
  const fmtHtml = html.split(`\n\n`).map(p => `<p>${p.replace(/\n/g, `<br>`)}</p>`).join(``)
  return (
    <Layout>
      <div class="flex min-h-screen m-auto">
        <div class="w-1/4 text-right" style={{ paddingTop: "9.4rem" }}>
          <a href="/" style={{float: "right"}} rel="noopener noreferrer">
            <FontAwesomeIcon class="text-grey-dark teal-accent w-8 fa-fw" icon={faHome} />
          </a>
          <br /> <br />
          {posts.edges.map(edge => {
            return (
              <div class="my-2">
                <a href={edge.node.frontmatter.path} class="text-gray-600 teal-accent">{edge.node.frontmatter.title}</a>
              </div>)
          })}
        </div>
        <div class="pl-16 pt-16 max-w-2xl">
          <h1 class="text-gray-700">{frontmatter.title}</h1>
          <h3 class="text-gray-600 -mt-4">{parseDate(frontmatter.date)}</h3>
          <br />
          <div
            class="pb-16"
            dangerouslySetInnerHTML={{ __html: fmtHtml }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdown: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
