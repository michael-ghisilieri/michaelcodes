import React, { Component } from 'react'
import './Panel.css'

class Panel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      title: '',
      text: '',
      imgPos: '',
      txtPos: '',
    }
  }

  render() {
    return (
      <div className="panel-container">
        <img
          style={{ float: this.props.imgPos,
            order: this.props.imgPos === 'right'? '3': '1' }}
          className="panel-img"
          src={this.props.image}
          alt="igloo"
        />
        <div style={{ float: this.props.txtPos }} className="panel-txt">
          <strong style={{ 'font-size': '30px'}} >{this.props.title}</strong>
          <p style={{ 'padding-top': this.props.title !== ''? '20px': '0px'}}> {this.props.text} </p>
        </div>
      </div>
    )
  }
}

export default Panel
