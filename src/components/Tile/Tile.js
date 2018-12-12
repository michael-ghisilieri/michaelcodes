import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Tile.css'

class Tile extends Component {
  render() {
    return (
      <div className="tile">
        <img
          className="tile-image"
          src={this.props.image}
          alt={this.props.alt}
        />
        <Link to={'#' + this.props.title + '-section'} className="centered">
          {this.props.title}
        </Link>
      </div>
    )
  }
}

export default Tile
