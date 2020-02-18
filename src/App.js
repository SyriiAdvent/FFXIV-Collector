import React from 'react';
import axios from 'axios'
import ffxivData from './ffxivapiCache.js'
import Cards from './Cards/Cards'
import './App.css';

// const getInfo = () => {
//   axios('https://staging.xivapi.com/character/9404354?data=AC,MIMO,FC,FCM')
//   .then(res => console.log(res));
// }
// getInfo();

const {Achievements, AchievementsPublic, Character, FreeCompany, FreeCompanyMembers, Friends, FriendsPublic, Minions, Mounts} = ffxivData;

function App() {
  return (
    <div className="App">
      {Minions.map( (ele, index) => Cards(ele, index) )}
    </div>
  );
}

export default App;