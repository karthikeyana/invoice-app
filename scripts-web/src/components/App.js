import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    const {header, main, footer} = this.props;
    return (
      <div className="app">
        <Header title={header} />
        <Main title={main} />
        <Footer title={footer} />
      </div>
    );
  }
}

export default App;
