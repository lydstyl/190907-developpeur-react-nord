import React from 'react'
import ReactWordcloud from 'react-wordcloud';
 
export const WordCloud = ({data}) => {
  data = data.map(d => {
    const str = d.title;
    const re = /(.*)\s([0-9]{1,2})\/10.*/gm
    const found = re.exec(str)

    return {
      text: found[1],
      value: parseInt(found[2])
    }
  })
  
  return (
      <ReactWordcloud words={data} />
  )
}