import React, { Component } from 'react'
import './Professional.css'
import textData from '../../content.json'
// import codeCollage from '../../images/codeCollage.png'

class Professional extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="prof-page">
        <span className="label prof-label">EXPERIENCE</span>
        <div className="prof-section">
          <div className="half-width">
            <h2>Axoni</h2>
            <p className="date-margin">June 2022 &mdash; July 2023</p>
            <p dangerouslySetInnerHTML={{ __html: textData.experienceAxoni }} />
          </div>

          <div className="half-width">
            <h2>Owned Outcomes</h2>
            <p className="date-margin">February 2019 &mdash; June 2022</p>
            <p dangerouslySetInnerHTML={{ __html: textData.experienceOwnedOutcomes }} />
          </div>

          <div className="half-width">
            <h2>Undergraduate Research Assistant</h2>
            <p className="date-margin">Sept 2016 &mdash; May 2017</p>
            <p dangerouslySetInnerHTML={{ __html: textData.experienceUndergrad }} />
          </div>

          <div className="clr" />
        </div>

        <span className="label prof-label">PROJECTS</span>
        <div className="prof-section flex">
          <div className="proj-info">
            <h2>MichaelCodes</h2>
            <p className="date-margin">May 2018 &mdash; Present</p>
            <p>{textData.profProject1}</p>
          </div>

          <div className="proj-info">
            <h2>Spots</h2>
            <p className="date-margin">Jan 2017 &mdash; May 2017</p>
            <p dangerouslySetInnerHTML={{ __html: textData.profProject2 }} />
          </div>

          <div className="proj-info">
            <h2>Microgrid</h2>
            <p className="date-margin">Sept 2016 &mdash; May 2017</p>
            <p dangerouslySetInnerHTML={{ __html: textData.profProject3 }} />
          </div>
        </div>

        <div className="clr" />

        <div className="half-width">
          <span className="label prof-label">EDUCATION</span>
          <div className="prof-section">
            <h2>UNIVERSITY OF NEVADA, LAS VEGAS</h2>
            <p className="date-margin">Class of 2017</p>
            <ul className="square-bullets">
              <li>B.S. in Computer Engineering</li>
              <li>Minor in Computer Science</li>
            </ul>
          </div>
        </div>

        {/* <span className="label prof-label">SKILLS</span>
        <div className="clr" />
        <div>
          <div className="skill-desc">
            <p>{textData.profSkillSum1}</p>
            <p>{textData.profSkillSum2}</p>
          </div>
          <img id="skill-image" src={codeCollage} alt="codeCollage" />
        </div> */}
        <div className="clr" />
      </div>
    )
  }
}

export default Professional
