import React from 'react';
import MedalsOverview from './MedalsOverview';
import MedalList from './MedalList';
import './SportList.css';

const SportList = (props) => {
  const {
    list: {
      Sport,
      Medals,
      GoldMedalList, 
      SilverMedalList,
      BronzeMedalList
    }
  } = props;
  const medalsOverviewProps = {
    gold: Medals.n_Gold,
    silver: Medals.n_Silver,
    bronze: Medals.n_Bronze,
    total: Medals.n_Total
  }
  return (
    <div className="sportList">
      <h2>{Sport.c_Name}</h2>
      <MedalsOverview {...medalsOverviewProps} />
      <div className="medalListWrapper">
        <MedalList medalList={GoldMedalList} type="Gold" />
        <MedalList medalList={SilverMedalList} type="Silver" />
        <MedalList medalList={BronzeMedalList} type="Bronze" />
      </div>
    </div>
  )
}

export default SportList;