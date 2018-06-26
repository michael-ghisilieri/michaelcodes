import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      title: '',
      content: '',
    }
  }

  render() {
    return (
      <div className="card-item">

        <img src={this.props.image} alt="test" />

        <strong>
          <p><br />{this.props.title}</p>
        </strong>

        <p>{this.props.content}</p>

      </div>
    )
  }
}

export default Card
