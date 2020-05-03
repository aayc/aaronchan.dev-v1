import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { graphql } from "gatsby"

const PostLinkList = ({posts, title, category}) => {
  return (<><h3 class="text-gray-700"><u>{title}</u></h3>
          {posts.edges.filter(edge => edge.node.frontmatter.category === category).map(edge => {
            return (
              <div class="my-1">
                <a href={edge.node.frontmatter.path} class="text-gray-600 teal-accent">{edge.node.frontmatter.title}</a>
              </div>)
          })}</>)
}

export default function Template({
  data,
}) {
  const { markdown, posts } = data
  const { frontmatter, html } = markdown
  const fmtHtml = html.split(`\n\n`).map(p => `<p>${p.replace(/\n/g, `<br>`)}</p>`).join(``)
  const fmtHtml2 = fmtHtml.replace("<a", "<a target='_blank'")
  return (
    <Layout>
      <div class="flex min-h-screen m-auto">
        <div class="w-1/4 text-right" style={{ paddingTop: "9.4rem" }}>
          <a href="/" style={{float: "right"}} rel="noopener noreferrer">
            <FontAwesomeIcon class="text-grey-dark teal-accent w-8 fa-fw" icon={faHome} />
          </a>
          <br /> <br />
          <PostLinkList posts={posts} title={"Walkthroughs"} category={"walkthrough"}/>
          <br />
          {/*<PostLinkList posts={posts} title={"Experiences"} category={"experience"}/>*/}
          <br />
          <PostLinkList posts={posts} title={"Daily Blog"} category={"daily"}/>
        </div>
        <div class="pl-16 pt-16 max-w-4xl">
          <h1 class="text-gray-700">{frontmatter.title}</h1>
          <h3 class="text-gray-600 -mt-4">{frontmatter.date_string}</h3>
          <div class="max-w-xl">
            <br />
            <div
              class="pb-16"
              dangerouslySetInnerHTML={{ __html: fmtHtml2 }}
            />
          </div>
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
        date_string
        path
        title
        category
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            path
            category
            title
          }
        }
      }
    }
  }
`
