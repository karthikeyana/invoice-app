import React, { Component } from 'react';

class Main extends Component {
  render() {
    const { title } = this.props;
    return(
      <main>
        {title}
      </main>
    )
  }
}

export default Main;
