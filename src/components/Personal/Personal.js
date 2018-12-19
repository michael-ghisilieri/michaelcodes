import React, { Component } from 'react'
import './Personal.css'
import Tile from '../Tile/Tile'
import horror from '../../images/horrorCandles.jpg'
import sports from '../../images/football.jpg'
import music from '../../images/musicDJ.jpg'
import gaming from '../../images/ps4Controller.jpg'

class Personal extends Component {
  render() {
    return (
      <div className="personal-page">
        <Tile image={music} title="music" alt="horror-tile" />
        <Tile image={sports} title="sports" alt="horror-tile" />
        <Tile image={horror} title="horror" alt="horror-tile" />
        <Tile image={gaming} title="gaming" alt="horror-tile" />
        <div className="clr" />

        <h1 id="music-section" className="monitor-font">
          MUSIC
        </h1>
        <h1 id="sports-section" className="sports-font">
          SPORTS
        </h1>
        <h1 id="horror-section" className="october-font">
          HORROR
        </h1>
        <h1 id="gaming-section" className="arcade-font">
          GAMING
        </h1>
      </div>
    )
  }
}

export default Personal
