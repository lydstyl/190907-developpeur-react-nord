import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SkillsBox from './style'
import { MainSkills } from '../MainSkills/MainSkills'
import { Certificates } from '../Certificates/Certificates'
import { WordCloud } from '../WordCloud/WordCloud'

const Skills = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/cv/" }) {
          frontmatter {
            skills {
              main {
                title
                rate
              }
              goal {
                title
                rate
              }
              other {
                title
              }
            }
          }
        }
      }
    `
  )

  const { other } = data.markdownRemark.frontmatter.skills

  return (
    <SkillsBox className='skills shadow p-3 mt-5 bg-white rounded'>
      <h2>
        <i className='far fa-check-square' /> Compétences:
      </h2>

      <ul>
        <MainSkills />

        <li>
          <h3>Autres:</h3>

          <WordCloud data={other} />
        </li>

        <Certificates />
      </ul>
    </SkillsBox>
  )
}

export default Skills
