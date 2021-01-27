import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Radar } from 'react-chartjs-2'

import SkillsBox from './style'
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

  const { main, goal, other } = data.markdownRemark.frontmatter.skills

  const mainSkills = main
    .map(mainSkill => {
      return mainSkill.title + ': ' + mainSkill.rate + '/10'
    })
    .join(', ')

  const radarData = {
    labels: main.map(skill => skill.title),
    datasets: [
      {
        data: main.map(skill => skill.rate),
        backgroundColor: 'rgba(255, 193, 7, 0.3)', // #ffc107
        borderColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 3,
        label: 'Actuelles',
        lineTension: 0.2
      },
      {
        data: goal.map(skill => skill.rate),
        backgroundColor: 'rgba(255, 193, 7, 0.1)',
        borderColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 3,
        label: 'Objectif',
        lineTension: 0.2,
        borderDash: [5]
      }
    ]
  }

  // const otherSkills = other
  //   .map(mainSkill => {
  //     return mainSkill.title
  //   })
  //   .join(', ')

  const options = {
    legend: {
      position: 'top'
    },
    scale: {
      ticks: {
        beginAtZero: true
      }
    }
  }

  return (
    <SkillsBox className='skills shadow p-3 mt-5 bg-white rounded'>
      <h2>
        <i className='far fa-check-square' /> Compétences:
      </h2>

      <ul>
        <li>
          <h3>Principales:</h3>

          <p className='mainSkills text-justify'>{mainSkills}</p>

          <div className='radar'>
            <Radar data={radarData} options={options} />
          </div>
        </li>

        <li>
          <h3>Autres:</h3>
          {/* <p className='text-justify'>{otherSkills}</p> */}

          <WordCloud data={other} />
        </li>

        <Certificates />
      </ul>
    </SkillsBox>
  )
}

export default Skills
