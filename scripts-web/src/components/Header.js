import React, { Component } from 'react';

class Header extends Component {
  render(){
    const {title} = this.props;
    return (
      <header>{title}</header>
    );
  }
}
export default Header;
