import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Layout from "../components/layout"
import Avatar from "../components/graphics/avatar"
import WhatsApp from "../components/graphics/whatsapp"
import Microsoft from "../components/graphics/microsoft"
import GE from "../components/graphics/ge"
import BYU from "../components/graphics/byu"
import BYUCampus from "../components/graphics/byu-campus"
import SEO from "../components/seo"
import Graph from "../components/graphics/graph"
import Language from "../components/graphics/language"

const IndexPage = () => (
  <Layout>
    <div class="scroll-snap-item" style={{
        margin: "0 auto",
        height: "100vh",
      }}
      class="flex flex-col justify-center align-middle">
      <center>
        <br /> <br /> <br /> <br/>
        <Avatar style={{boxShadow: "10px 10px 10px hsla(0, 10%, 0.1)" }}/>
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
        {/*<a class="text-grey-dark teal-accent" href="#">contact me</a>*/}
        <br /> <br /> <br /> <br />
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

    <div class="scroll-snap-item" style={{
      margin: "0 auto",
      height: "100vh",
      maxWidth: 1200,
      overflow: "hidden",
    }}>
      <div style={{ width: "33%", marginTop: 100 }}>
        <div style={{height: "25%", marginTop: 100}}>
          <h2 class="text-grey-darkest">about</h2>
        </div>
        <h2 class="text-grey-darkest">education</h2>
        <h2 class="text-grey-darkest">projects</h2>
        <h2 class="text-grey-darkest">blog</h2>
      </div>
    </div>


    <div class="scroll-snap-item" style={{
      maxWidth: 1200,
      margin: "0 auto",
      height: "100vh",
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
  </Layout>
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
