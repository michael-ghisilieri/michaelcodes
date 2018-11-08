import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      title: '',
      content: '',
      alt: '',
    }
  }

  render() {
    return (
      <div className="card-item">
        <div>
          <img src={this.props.image} alt={this.props.alt} />
        </div>

        <strong>
          <p>
            <br />
            {this.props.title}
          </p>
        </strong>

        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Card
