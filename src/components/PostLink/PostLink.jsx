import React from "react"
import { Link } from "gatsby"

import "./PostLink.scss"

const PostLink = ({ post }) => (
  <li
    className="PostLink"
    style={{
      backgroundImage: `url("${post.frontmatter.img}")`,
    }}
  >
    <Link to={post.frontmatter.path}>
      <div className="title-box">
        <span className="title">{post.frontmatter.title} </span>
        <span className="text-warning">débuté le {post.frontmatter.date}</span>
      </div>
    </Link>
  </li>
)

export default PostLink
