import React, { Component } from 'react';
import "./monsterLessons.css"
import DropDown from "./DropDown.js"

class MonsterLessons extends Component {
  render() {
    return (
      <div className="monsterLessons">
        <h1>MonsterLessons</h1><hr/>
        <DropDown />
      </div>
    );
  }
}

export default MonsterLessons;