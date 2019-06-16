import React, { Component } from 'react'
import Layout from '../components/layout'
import '../components/blog.css'
export default class blog extends Component {
  render() {
    return (
      <Layout>
        <h1 className="blog-title">this is our blog page</h1>
      </Layout>
    )
  }
}
