import React from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
      <ul className="nav">
        <li><Link to="/">Nav Link</Link></li>
      </ul>
    );
  }
}
