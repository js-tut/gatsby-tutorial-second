import React, { Component } from 'react'
import { Link } from 'gatsby'
export default class blog extends Component {
  render() {
    return (
      <div>
        this is our blog page
        <div>
          <Link to="/">Home Page</Link>
        </div>
      </div>
    )
  }
}
