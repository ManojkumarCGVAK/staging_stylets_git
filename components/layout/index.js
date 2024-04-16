import React, { Component } from 'react';

import Loadable from '../elements/Loadable';

// import components
const Header = Loadable(lazy(() => import('./Header')));
const Footer = Loadable(lazy(() => import('./Footer')));

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
