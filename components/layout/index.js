import React, { Component } from 'react';

// import components
import Header from './Header';
import Footer from './Footer';

export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
