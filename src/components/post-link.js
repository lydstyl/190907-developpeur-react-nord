import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <li>
    <Link to={post.frontmatter.path} className="btn btn-secondary btn-sm m-2">
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </li>
)

export default PostLink
