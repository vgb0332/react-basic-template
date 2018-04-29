import React, { Component } from 'react';
// import Content from './Content';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="Body-wrapper">
        <Content title="title"
                 content="content"
        />
      </div>
    );
  };
}

const Content = ({title, content}) => {
  return (
    <div>
      <h2 className="Content-title">
        {title}
      </h2>
      <p className="Content-content">
        {content}
      </p>
    </div>
  );
};

export default Body;
