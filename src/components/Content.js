import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="Content-title">
          {this.props.title}
        </h2>
        <p className="Content-content">
          {this.props.content}
        </p>
      </div>
    );
  };
}

export default Content;
