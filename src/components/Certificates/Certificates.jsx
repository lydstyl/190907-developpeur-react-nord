import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const Certificates = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allStrapiCertificat {
          nodes {
            name
            url
          }
        }
      }
    `)

    const certificats = data.allStrapiCertificat.nodes.map(c => 
      <p className='text-justify'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={c.url}
        >
          {c.name}
        </a>
      </p>)

    return (
        <li>
          <h3>Certificats:</h3>

          <div className='certificates'>
            {certificats}
          </div>
        </li>
    )
}
