import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Layout from "../components/layout"
import Avatar from "../components/graphics/avatar"
import WhatsApp from "../components/graphics/whatsapp"
import Microsoft from "../components/graphics/microsoft"
import GE from "../components/graphics/ge"

const resumeLink = "https://drive.google.com/file/d/1ZwIDmLNkNWzzU1KEfYCJEzu1dWXQLoea/view"
const politweetHref = "https://github.com/aayc/politweet/blob/master/Politweet.pdf"
const tanksHref = "https://enigmatic-reef-9847.herokuapp.com"
const corridorsHref = "https://www.npmjs.com/package/corridors"
const courseapiHref = "https://github.com/aayc/byu-coursemajor-api"
const qlearnHref = "http://thatnerd2.github.io/projects/rat-reward-js/index.html"
const ProjectLink = ({href, children}) => (
  <a href={href} class="text-grey-darker teal-accent" rel="noreferrer noopener" target="_blank">{children}</a>
)

function isMobileDevice() {
  try {
              if(/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
                return true;
    };
    return false;
  } catch(e) {
    console.log("Error in isMobile");
    return false;
  }
}
const IndexPage = () => {
  if (!isMobileDevice()) {
    return (
      <Layout>
        <SEO title="Home"/>
        <Splash />
        <About />
        <WorkExperience />
      </Layout>
    )
  }
  else {
    return (
      <Layout>
        <MobileSplash />
      </Layout>
    )
  }
}

const Splash = () => (
    <div class="flex-col scroll-snap-item" style={{
        margin: "0 auto",
        height: "100vh",
        minHeight: 1000
      }}>
      <center>
        <div style={{height: 250}}/>
        <Avatar/>
        <h1 class="text-grey-darkest">Aaron Chan</h1>
        <h3 class="text-grey-dark"><i>software eng, musician, statistician</i></h3>
        <table cellpadding="10" style={{fontSize: "1.2rem"}}>
          <tr>
            <td> <a href="mailto:aaron.y.chan64@gmail.com" rel="noopener noreferrer"><FontAwesomeIcon class="text-grey-dark teal-accent-light fa-fw" icon={faEnvelope} /></a> </td>
            <td> <a href="https://www.facebook.com/aaron.chan.92505" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon class="text-grey-dark teal-accent-light fa-fw" icon={faFacebook} /></a> </td>
            <td> <a href="https://github.com/aayc" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon class="text-grey-dark teal-accent-light fa-fw" icon={faGithub} /></a> </td>
            <td> <a href="https://www.linkedin.com/in/aaron-y-chan/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon class="text-grey-dark teal-accent-light fa-fw" icon={faLinkedin} /></a> </td>
          </tr>
        </table>
        <FontAwesomeIcon class="text-grey-dark" style={{
          width: 60,
          height: 60,
          padding: 15,
          borderRadius: "50%",
          marginTop: "13em",
          border: "2px dotted hsl(207, 12%, 43%)"
        }}
          icon={faAngleDoubleDown} />
      </center>
    </div>
)

const MobileSplash = () => (
    <div style={{
        margin: "0 auto",
        height: "100vh",
        minHeight: 500
      }}
      class="flex flex-col">
      <center>
        <Avatar />
        <h1 class="text-grey-darkest">Aaron Chan</h1>
        <h3 class="text-grey-dark"><i>software eng, musician, statistician</i></h3>
        <table cellpadding="10" style={{fontSize: "1.2rem"}}>
          <tr>
            <td> <a href="mailto:aaron.y.chan64@gmail.com" rel="noopener noreferrer"><FontAwesomeIcon class="text-grey-dark teal-accent-light fa-fw" icon={faEnvelope} /></a> </td>
            <td> <a href="https://www.facebook.com/aaron.chan.92505" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon class="text-grey-dark teal-accent-light fa-fw" icon={faFacebook} /></a> </td>
            <td> <a href="https://github.com/aayc" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon class="text-grey-dark teal-accent-light fa-fw" icon={faGithub} /></a> </td>
            <td> <a href="https://www.linkedin.com/in/aaron-y-chan/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon class="text-grey-dark teal-accent-light fa-fw" icon={faLinkedin} /></a> </td>
          </tr>
        </table>
      </center>
  </div>

)

const About = () =>{
    return (
    <div class="flex scroll-snap-item" style={{
      margin: "0 auto",
      height: "100vh",
      maxWidth: 1100,
      minHeight: 1000,
    }}>
      <table style={{width: "100%", minHeight: "90vh", marginTop: 50}} cellpadding="30">
        <tr>
          <td align="right" style={{width: "50%"}} class="teal-border-td"><h2 class="text-grey-darkest">about</h2></td>
          <td align="left">
            <p class="fade-in-on-view text-grey-darker">I'm a software enthusiast who's loved programming since I was 8 (Flash Actionscript 2!), pianist and cellist, a developing 中文 and Spanish speaker, wannabe chef, urbanite, statistician, 150+ WPM typist, and all around make-things-happen kind of guy.</p>
          </td>
        </tr>
        <tr>
          <td align="right" style={{width: "50%"}} class="teal-border-td"><h2 class="text-grey-darkest">education</h2></td>
          <td align="left">
            <p class="fade-in-on-view text-grey-darker">I'm a 3rd year undergraduate student and Presidential Scholar at BYU, <span class="teal-accent"><b>graduating 2021</b></span> with a double B.S. in Computer Science and Statistics.  </p>
            <br />
            <p class="fade-in-on-view text-grey-darker">I'm looking for a <a href={resumeLink} target="_blank" rel="noopener noreferrer" class="teal-accent">2021 summer internship</a> and <a href={resumeLink} target="_blank" rel="noopener noreferrer" class="teal-accent">full time work starting winter 2022</a></p>
          </td>
        </tr>
        <tr>
          <td align="right" style={{width: "50%"}} class="teal-border-td"><h2 class="text-grey-darkest">projects</h2></td>
          <td align="left">
            <p class="fade-in-on-view text-grey-darker">Some of my favorite self-driven pedagogical projects include <ProjectLink href={tanksHref}>Tank Battles</ProjectLink>, <ProjectLink href={corridorsHref}>Corridors</ProjectLink>, and <ProjectLink href={politweetHref}>Politweet</ProjectLink>.  Older projects include <ProjectLink href={courseapiHref}>BYU Course API</ProjectLink> and <ProjectLink href={qlearnHref}>Rat Run</ProjectLink>.</p>
          </td>
        </tr>
        <tr>
          <td align="right" style={{width: "50%"}} class="teal-border-td"><h2 class="text-grey-darkest"><a target="_blank" rel="noopener noreferrer" href="/blog/hello-world">blog</a></h2></td>
          <td align="left">
            <ul class="ml-4 text-grey-darker list-disc">
              <StaticQuery
                query={graphql`
                  query {
                    allMarkdownRemark(
                      sort: { order: DESC, fields: [frontmatter___date] }
                      limit: 3
                    ) {
                      edges {
                        node {
                          frontmatter {
                            title
                            date_string
                            path
                          }
                        }
                      }
                    }
                  }
                `}
                render={data => (
                  data.allMarkdownRemark.edges.map(edge => {
                    let title = edge.node.frontmatter.title
                    let date = edge.node.frontmatter.date_string
                    let path = edge.node.frontmatter.path
                    return (
                      <li class="my-2">
                        <a class="teal-accent" href={path} target="_blank" rel="noopener noreferrer">{title + " (" + date + ")"} </a>
                      </li>
                    )
                  })
                )}
              />
            </ul>
          </td>
        </tr>
      </table>
  </div>
  )
}

const WorkExperience = () => (
    <div class="scroll-snap-item" style={{
      maxWidth: 1200,
      margin: "0 auto",
      height: "100vh",
      minHeight: 1000
    }}>
      <br /> <br />
      <div style={{ display: "flex" }}>
        <CompanyColumn logo=<WhatsApp/> title="WhatsApp" role="2020 SWE Intern">
          <ul class="list-disc">
            <li>Built new testing framework that reduced test time from <span class="text-red-dark">420s</span> to <span class="text-green-dark">20s</span>.</li>
            <br />
            <li>How good is WhatsApp's message storage redundancy?  Wired in real-time metrics that continue to provide insights on this and inform design decisions.</li>
            <br />
            <li>Improved failure response scenarios for critical data transfer procedures.</li>
          </ul>
        </CompanyColumn>
        <CompanyColumn logo=<Microsoft/> title="Microsoft" role="2019 SWE Intern">
          <ul class="list-disc">
            <li>Designed, implemented and tested <a href="https://docs.microsoft.com/en-us/odata/extensions/migration" class="text-grey-darker teal-accent">OData Migration extension</a>, which automatically converts OData v4 to v3 for requests and responses in a stable, model-driven way.</li>
            <br />
            <li>OData is used by web services within companies like Microsoft, SAP, Salesforce, and many more.</li>
            <br />
            <li>Open source <a href="https://github.com/OData/Extensions" class="text-grey-darker teal-accent">here</a>.</li>
          </ul>
        </CompanyColumn>
        <CompanyColumn logo=<GE/> title="GE Global Research" role="2018 Fellow Intern">
          <ul class="list-disc">
            <li>Fixed several concurrency/memory leak errors in ultrasound demo app.</li>
            <br />
            <li>Prototyped an AR application for more automatic and accessible ultrasound scans using Android + TensorFlow Lite to compute real-world positioning for assisted scanning.</li>
            <br />
            <li>Presented prototype, research and live demo to GE executives.</li>
          </ul>
        </CompanyColumn>
      </div>
    </div>
)

const CompanyColumn = ({ title, logo, role, children }) => (
  <div style={{
    width: "33%",
    marginTop: 100,
  }}>
    <center>
    {logo}
    <br />
    <h3 class="text-grey-darkest"><b>{title}</b></h3>
    <h4 class="text-grey-dark">{role}</h4>
    <br />
    <br />
    </center>
    <div style={{marginLeft: 70, marginRight: 10}}>
      {children}
    </div>
  </div>
)

export default IndexPage
