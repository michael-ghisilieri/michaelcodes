import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: '',
			imgPos: '',
			txtPos: ''
		};
	}

  render() {
    return (
			<panels>
				<div className="container2">
					<img style={{float: this.props.imgPos}} className="panel-img" src={ this.props.image } alt="igloo"/>
					<p style={{float: this.props.txtPos}} className="panel-txt">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</panels>
        );
    }
}

export default Panel;