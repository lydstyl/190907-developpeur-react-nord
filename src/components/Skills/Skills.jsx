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
        allStrapiSkill(filter: {labels: {elemMatch: {name: {eq: "other"}}}, score: {gte: 1}}, sort: {order: DESC, fields: score}) {
          edges {
            node {
              name
              score
            }
          }
        }
      }
    `
  )

  let {edges: otherSkills} = data.allStrapiSkill
  otherSkills = otherSkills.map(s => ({title: `${s.node.name} ${s.node.score}/10`}))

  return (
    <SkillsBox className='skills shadow p-3 mt-5 bg-white rounded'>
      <h2>
        <i className='far fa-check-square' /> Compétences:
      </h2>

      <ul>
        <MainSkills />

        <li>
          <h3>Autres:</h3>

          <WordCloud data={otherSkills} />
        </li>

        <Certificates />
      </ul>
    </SkillsBox>
  )
}

export default Skills
