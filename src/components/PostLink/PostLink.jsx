import React from "react"
import { Link } from "gatsby"

import Image from "../Image/Image"

import "./PostLink.scss"

const PostLink = ({ post }) => {
  const { img, isImageFile, images, path, title, date } = post.frontmatter

  let image = ""

  if (isImageFile && images) {
    image = <Image src={images.replace("/src/images/", "")} />
  } else if (img) {
    image = (
      <img
        src={img}
        alt="img"
        style={{ display: "block", maxWidth: "100%", margin: "auto" }}
      />
    )
  }

  return (
    <li
      className="PostLink"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      {/* {image} */}

      <Link to={path}>
        <div className="title-box">
          <span className="title">{title} </span>
          <span className="text-warning">débuté le {date}</span>
        </div>
      </Link>
    </li>
  )
}

export default PostLink
