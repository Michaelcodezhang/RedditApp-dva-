import React, { Component } from 'react'

class Posts extends Component {
  render () {
    const {posts} = this.props
    return (
      <ul>
        {posts.map((post, i) =>
          <li key={i}>{post.title}</li>
        )}
      </ul>
    )
  }
}

export default Posts
