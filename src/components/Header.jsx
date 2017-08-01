import React from 'react';
import Nav from './header/Nav.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <h1>This is the header</h1>
        <Nav />
      </div>
    );
  }
}
