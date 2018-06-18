import React, { Component } from 'react';
import "./monsterLessons.css"
import Header from "./Header.js"

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];

class MonsterLessons extends Component {
  render() {
    return (
      <div className="monsterLessons">
        <h1>MonsterLessons</h1><hr/>

        <Header menuItems = {menu} />

      </div>
    );
  }
}

export default MonsterLessons;