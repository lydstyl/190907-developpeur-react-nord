import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Radar } from 'react-chartjs-2'

export const MainSkills = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allStrapiSkill(filter: {labels: {elemMatch: {name: {eq: "main skill"}}}}) {
          nodes {
            name
            score
            goalScore
          }
        }
      }
    `
  )

  const main = data.allStrapiSkill.nodes

  const mobileMainSkills = main.map(s => {
    let stars = ''

    for (let i = 0; i < s.score; i++) {
      stars += '★'
    }

    for (let i = 0; i < 10 - s.score; i++) {
      stars += '☆'
    }

    return (
      <span key={s.name}><span>{s.name}</span><span>{stars}</span></span>
    )
  })

  const radarMainSkills = {
    labels: main.map(skill => skill.name),
    datasets: [
      {
        data: main.map(skill => skill.score),
        backgroundColor: 'rgba(255, 193, 7, 0.3)', // #ffc107
        borderColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 3,
        label: 'Actuelles',
        lineTension: 0.2
      },
      {
        data: main.map(skill => skill.goalScore),
        backgroundColor: 'rgba(255, 193, 7, 0.1)',
        borderColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 3,
        label: 'Objectif',
        lineTension: 0.2,
        borderDash: [5]
      }
    ]
  }

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
    <li>
      <h3>Principales:</h3>

      <p className='mainSkills'>{mobileMainSkills}</p>

      <div className='radar'>
        <Radar data={radarMainSkills} options={options} />
      </div>
    </li>
  )
}
