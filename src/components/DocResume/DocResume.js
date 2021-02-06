import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import * as dayjs from 'dayjs'

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

function addStarsToMainSkills(frontmatter) {
  frontmatter.skills.main = frontmatter.skills.main.map(s=>{
    let fullStars = s.rate
    s.stars = '' 
    for (let i = 0; i < 10; i++) {
      if (fullStars < 1) {
        s.stars += '☆'
      } else {
        s.stars += '★'
      }
      fullStars --
    }

    return s
  })

  return frontmatter
}

function formateDates(frontmatter) {
  frontmatter.date = dayjs().format('DD/MM/YYYY')
  frontmatter.experience = frontmatter.experience.map(e => ({...e, begin: dayjs(e.begin).format('DD/MM/YYYY'), end: dayjs(e.end).format('DD/MM/YYYY')}))
  
  return frontmatter
}

function filterOtherSkills(frontmatter) {
  frontmatter.skills.other = frontmatter.skills.other.filter(s=>{
    const rate = /([0-9])\//gm.exec(s.title)[1]
    
    if (rate >= 6) {
      return true
    }

    return false
  })

  return frontmatter
}

export const DocResume = () => {
  const data = useStaticQuery(
    graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/cv/" }) {
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            description
            objectif
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
            experience {
              job
              company
              begin
              ismycurrentjob
              end
            }
          }
        }
      }
    `
  )

  let { frontmatter } = data.markdownRemark
  
  
  frontmatter = addStarsToMainSkills(frontmatter)
  frontmatter = formateDates(frontmatter)
  frontmatter = filterOtherSkills(frontmatter)
  


  const generateDocument = () => {
    loadFile("http://localhost:8000/assets/resume-template.docx", function(
      error,
      content
    ) {
      if (error) {
        throw error;
      }
      var zip = new PizZip(content);
      var doc = new Docxtemplater().loadZip(zip);
      doc.setData(frontmatter);
      try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render();
      } catch (error) {
        // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
        function replaceErrors(key, value) {
          if (value instanceof Error) {
            return Object.getOwnPropertyNames(value).reduce(function(
              error,
              key
            ) {
              error[key] = value[key];
              return error;
            },
            {});
          }
          return value;
        }
        console.log(JSON.stringify({ error: error }, replaceErrors));

        if (error.properties && error.properties.errors instanceof Array) {
          const errorMessages = error.properties.errors
            .map(function(error) {
              return error.properties.explanation;
            })
            .join("\n");
          console.log("errorMessages", errorMessages);
          // errorMessages is a humanly readable message looking like this :
          // 'The tag beginning with "foobar" is unopened'
        }
        throw error;
      }
      var out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      }); //Output the document using Data-URI
      saveAs(out, `cv-dev-react-nord-Gabriel-Brun-généré-le-${dayjs().format('DD-MM-YYYY')}.docx`);
    });
  };

  return (
    <div className="p-2">
        <button onClick={generateDocument}>Nouveau : générer mon CV Word</button>
      </div>
  )
}