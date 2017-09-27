import React from 'react';
import './MedalsOverview.css';

const MedalsOverview = (props) => {
  const { gold, silver, bronze, total } = props;
  return (
    <div className="medalsOverview">
      <div>Total amount of medals won: {total}</div>
      <br />
      <div>Golden medals won: {gold}</div>
      <div>Silver medals won: {silver}</div>
      <div>Bronze medals won: {bronze}</div>
    </div>
  )
}

export default MedalsOverview;