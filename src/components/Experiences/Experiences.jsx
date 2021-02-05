import React from "react"

// import Jobs from "../Jobs/Jobjs"
import {DocResume} from '../DocResume/DocResume'
import DownLoadCVBox from "./style"

const Experiences = () => {
  return (
    <div className="shadow p-3 mt-5 bg-white rounded">
      <h2>
        <i className="fas fa-briefcase"></i> Voir mon CV et mes expériences :
      </h2>

      <DownLoadCVBox>
        <DocResume data={{
          first_name: "John",
          last_name: "Doe",
          phone: "0652455478",
          description: "New Website"
        }} />
        <div className="downLoadCV">
          <a href="/assets/cv.docx">Word</a>
        </div>
        <div className="downLoadCV">
          <a target="_blank" href="/assets/cv.pdf">
            PDF
          </a>
        </div>
      </DownLoadCVBox>
    </div>
  )
}

export default Experiences
