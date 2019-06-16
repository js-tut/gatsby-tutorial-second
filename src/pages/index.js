import React from 'react'
import { Link } from 'gatsby'
export default () => (
  <div>
    <h1>this is our home page</h1>
    Hello world!
    <div>
      {/* <a href="/blog/">blog page</a> */}
      <Link to="/blog/">blog page</Link>
    </div>
    <div>
      <a href="https://www.gatsbyjs.org">gatsby page</a>
    </div>
  </div>
)
