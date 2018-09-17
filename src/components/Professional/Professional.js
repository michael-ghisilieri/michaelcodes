import React, { Component } from 'react'
import './Professional.css'
import textData from '../../content.json'

class Professional extends Component {
  render() {
    return (
      <div className="prof-page">
        <span className="label prof-label">PROJECTS</span>
        <div className="prof-section flex">
          <div className="proj-info">
            <h2>MichaelCodes</h2>
            <p className="date-margin">May 2018 - Present</p>
            <p>{textData.profProject1}</p>
          </div>
          <div className="proj-info">
            <h2>Spots</h2>
            <p className="date-margin">Jan 2017 - May 2017</p>
            <p dangerouslySetInnerHTML={{__html: textData.profProject2}} />
          </div>
          <div className="proj-info">
            <h2>Microgrid</h2>
            <p className="date-margin">Sept 2016 - May 2017</p>
            <p dangerouslySetInnerHTML={{__html: textData.profProject3}} />
          </div>
        </div>

        <div className="exp-edu-width square-bullets">
          <span className="label prof-label">EXPERIENCE</span>
          <div className="prof-section">
            <h2>Undergraduate Research Assistant</h2>
            <p className="date-margin">Sept 2016 - May 2017</p>
            <ul>
              <li>Worked on multiple team projects simultaneously</li>
              <li>Microcontroller programming in C++ and FPGA programming in Verilog on Cyclone IV/V</li>
              <li>Chip design in the C5 Process</li>
            </ul>
          </div>
        </div>

        <div className="exp-edu-width square-bullets">
          <span className="label prof-label">EDUCATION</span>
          <div className="prof-section">
            <h2>UNIVERSITY OF NEVADA, LAS VEGAS</h2>
            <p className="date-margin">Class of 2017</p>
            <ul>
              <li>B.S. in Computer Engineering</li>
              <li>Minor in Computer Science</li>
            </ul>
          </div>
        </div>

         <div className="clr"/>
        
        <span className="label prof-label">SKILLS</span>
        <div className="clr"/>
        <div className="skill-section">
          <div className="box-with-border">
            <h2>Front End</h2>
            <div className="black-bar"/>
            <ul>
              <li>ReactJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Desktop &amp; Mobile Design</li>
            </ul>
          </div>
          <div className="box-with-border list-padding middle-box">
            <h2>Back End</h2>
            <div className="black-bar"/>
            <ul>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="box-with-border">
            <h2>Other</h2>
            <div className="black-bar"/>
            <ul>
              <li>C++</li>
              <li>Github</li>
              <li>Testing &amp; Debugging</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
        </div>
        <div className="clr"/>
      </div>
    )
  }
}

export default Professional
