import React, { Component } from 'react'
import Panel from '../Panels/Panel'
import Card from '../Cards/Card'
import codephoto from '../../images/code.jpg'
import webpage from '../../images/webpage.png'
import tools from '../../images/tools.png'
import recordplayer from '../../images/recordplayer.png'
import computer from '../../images/computer-desk.jpg'
import guitar from '../../images/guitar-catcher.jpg'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>

        <img className="header-img" src={codephoto} alt="orange justice" />

        <div className="about">
          <h2>About Me</h2>
          <div className="line-bar" />

          <div>
            <p>
              Computer Engineer graduate who has found a new love for web
              development and design. Hop along for the ride.
            </p>
          </div>
        </div>

        <div className="card-box">
          <Card image={webpage} title="Web Development" content="Found a new love for web development and making the internet look a little more exciting." />
          <Card image={tools} title="Building Things" content="Building more than just websites with basically anything that sparks my interest at the time." />
          <Card image={recordplayer} title="Music Is Good Too" content="I think 14 years of playing guitar has earned me the right to say I'm pretty into music, no?" />
        </div>

        <div className="panel-box">
          <Panel
            image={computer} title="Michael Ghisilieri" imgPos="left" txtPos="right"
            text="Basically living on my computer, I spend my time focusing on becoming a web designer and developer nowadays. There's just something intriguing about learning with tools like ReactJS that combines programming with the creativity to have complete control of an entire website. To find out more about the work that I have done in the past and am currently working towards, check out <a href='/professional'>professional</a>."
          />
          <Panel 
            image={guitar} title='' imgPos="right" txtPos="left"
            text="When I'm not building, designing, and learning stuff on my computer, I like to expand my music library. Being a video game collector also keeps me occupied every now and then. To give everyone a more personal look into my life, I'll update things such as what I'm currently listening to for the week and maybe game pickups over on <a href='/personal'>personal</a>. Who knows, maybe some guitar covers will start popping up along the way too."  
          />
        </div>

      </div>
    )
  }
}

export default Home
