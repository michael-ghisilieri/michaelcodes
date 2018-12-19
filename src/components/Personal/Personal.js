import React, { Component } from 'react'
import './Personal.css'
import textData from '../../content.json'
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

        <div id="music-section" className="personal-section">
          <h1 className="monitor-font">MUSIC</h1>
          <p className="description">{textData.persHorrorDesc}</p>
          <ul>
            <li>The Conjuring 2</li>
            <li>The Nightmare</li>
            <li>Dead Silence</li>
            <li>Trick 'r Treat</li>
            <li>Grave Encounters</li>
          </ul>
        </div>

        <div id="sports-section" className="personal-section">
          <h1 className="sports-font">SPORTS</h1>
          <p className="description">{textData.persHorrorDesc}</p>
          <ul>
            <li>The Conjuring 2</li>
            <li>The Nightmare</li>
            <li>Dead Silence</li>
            <li>Trick 'r Treat</li>
            <li>Grave Encounters</li>
          </ul>
        </div>

        <div id="horror-section" className="personal-section">
          <h1 className="october-font">HORROR</h1>
          <p className="description">{textData.persHorrorDesc}</p>
          <ul>
            <li>The Conjuring 2</li>
            <li>The Nightmare</li>
            <li>Dead Silence</li>
            <li>Trick 'r Treat</li>
            <li>Grave Encounters</li>
          </ul>
        </div>

        <div id="gaming-section" className="personal-section">
          <h1 className="arcade-font">GAMING</h1>
          <p className="description">{textData.persHorrorDesc}</p>
          <ul>
            <li>The Conjuring 2</li>
            <li>The Nightmare</li>
            <li>Dead Silence</li>
            <li>Trick 'r Treat</li>
            <li>Grave Encounters</li>
          </ul>
        </div>
        <div className="clr" />
      </div>
    )
  }
}

export default Personal
