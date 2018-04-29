import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarList : [
        { label: 'HOME' },
        { label: 'SECTION1' },
        { label: 'SECTION2' },
        { label: 'SECTION3' },
        { label: 'SECTION4' }
      ]
    };
  }

  render() {
    return (
      <div className="Navbar-wrapper">
        {this.state.navbarList.map((list, i) => {
          return (<div className="Navbar-section"
                       key= {i}>
                    <span>
                      {list.label}
                    </span>
                  </div>
                 );
        })}
      </div>
    );
  };
}

export default Navbar;
