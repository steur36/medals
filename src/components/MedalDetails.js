import React from 'react';
import './MedalDetails.css';

const MedalDetails = (props) => {
  const { Participant, Event, Gender } = props;
  return (
    <div className="medalDetails">
      <div>
        Name: {Participant.c_Participant} ({Gender.c_Name === 'Men' ? 'm' : 'f'})
      </div>
      <div>Event: {Event.c_Name}</div>
    </div>
  )
}

export default MedalDetails;