import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Image from '../Image/Image'

const CVDescriptionBox = () => {
  const data = useStaticQuery(
    graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/cv/" }) {
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    `
  )

  const { date, description } = data.markdownRemark.frontmatter

  return (
    <div className='cv-description-box shadow p-3 mt-5 bg-white rounded'>
      <h2 className='d-none'>
        CV Gabriel Brun ou curriculum vitae développeur React.js
      </h2>

      <Image src='photo_profil_gabriel_brun_github.jpg' />

      <p className='text-justify'>{description}</p>

      <p className='text-right font-italic'>Mise à jour le {date}</p>

      <iframe
        title='cv vidéo'
        width='560'
        height='315'
        src='https://www.youtube-nocookie.com/embed/u4LuxFWGtf0'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
       />
    </div>
  )
}

export default CVDescriptionBox
