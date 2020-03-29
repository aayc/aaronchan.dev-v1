import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import "./colors.css"

const Layout = ({ children }) => {
  return (
    <>
      <div class="bg">
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
