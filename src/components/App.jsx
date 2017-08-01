import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
