import React from 'react'

import Navbar from './Navbar'

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {/* See App.js to see the children */}
      {props.children}
    </React.Fragment>
  )
}

export default Layout;