import React, { useEffect } from 'react';

import './Home.css';

import Panel from '../Panels/Panel';
import Card from '../Cards/Card';
import codephoto from '../../images/code.jpg';
import webpage from '../../images/webpage.png';
import tools from '../../images/tools.png';
import recordplayer from '../../images/recordplayer.png';
import computer from '../../images/computer-desk.jpg';
import guitar from '../../images/guitar-catcher.jpg';

import textData from '../../common/content.json';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="header-img-box">
        <img className="header-img" src={codephoto} alt="code-editor" />
      </div>

      <div className="about-home">
        <h2>About Me</h2>
        <div className="line-bar" />

        <div>
          <p>
            Computer Engineer graduate who has found a new love for web
            development. This website starts the journey. Hop along for the
            ride.
          </p>
        </div>
      </div>

      <div className="card-box">
        <Card
          image={webpage}
          title="Web Development"
          content={textData.homeCard1}
          alt="webpage-icon"
        />
        <Card
          image={tools}
          title="Building Things"
          content={textData.homeCard2}
          alt="tool-icon"
        />
        <Card
          image={recordplayer}
          title="Music Is Good Too"
          content={textData.homeCard3}
          alt="music-icon"
        />
      </div>

      <div className="panel-box">
        <Panel
          image={computer}
          title="Michael Ghisilieri"
          imgPos="left"
          txtPos="right"
          text={textData.homePanel1}
          alt="computer-desk"
        />
        <Panel
          image={guitar}
          title=""
          imgPos="right"
          txtPos="left"
          text={textData.homePanel2}
          alt="guitar"
        />
      </div>
    </div>
  );
};

export default Home;
