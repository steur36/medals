import React from 'react';
import MedalDetails from './MedalDetails';
import './MedalList.css';

const MedalList = (props) => {
  const { medalList, type } = props;
  return (
    <div className="medalList">
      <h3>{type} Medals</h3>
      { medalList.length > 0 ?
          medalList.map(medal => <MedalDetails {...medal} />)
        :
          'None'
      }
    </div>
  )
}

export default MedalList;
