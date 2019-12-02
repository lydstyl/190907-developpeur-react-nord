import React from "react"
import { Link } from "gatsby"

import Image from "../Image/Image"

import "./PostLink.scss"

const PostLink = ({ post }) => {
  const { img, isImageFile, images, path, title, date } = post.frontmatter

  let image = ""
  let theSytle = {}

  if (images) {
    image = <Image src={images.replace("/src/images/", "")} />
  } else if (img) {
    theSytle = {
      backgroundImage: `url("${img}")`,
    }
  }

  return (
    <li className="PostLink" style={theSytle}>
      <Link to={path}>
        {image}
        <div className="title-box">
          <span className="title">{title} </span>
          <span className="text-warning">débuté le {date}</span>
        </div>
      </Link>
    </li>
  )
}

export default PostLink
