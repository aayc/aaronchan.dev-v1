import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const articles = [{
  title: "Learning Chinese from scratch",
  short_title: "learning chinese from scratch",
  date: "April 13th, 2020",
  content: (<p>Hello there<a href="/">and i'm a link</a></p>)
}]

const Blog = () => (
  <Layout>
    <div style={{
        margin: "0 auto",
        minHeight: "100vh",

    }}>
      <div style={{
        minWidth: 350,
        minHeight: "100vh",
        float: "left",
        textAlign: "right",
        marginTop: "10%"
      }}>
        <a href="/" class="text-grey-dark teal-accent">home</a>
        <br />
        <br />
        <br />
        {articles.map(article =>
                      <a href="/" class="text-grey-darker teal-accent">{article.short_title}</a>)}

      </div>
      <div style={{
        marginLeft: 100
      }}>

        <h1>Blog</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
    <SEO title="Blog" style={{ position: "absolute" }}/>
  </Layout>
)

export default Blog
