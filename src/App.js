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

const cardMaker = obj => {
  obj.forEach( ele => {
    console.log(ele)
  })
}
cardMaker(Minions)

console.log(Minions)

function App() {
  return (
    <div className="App">
      {/* <Cards url={Minions[0].Icon} name={Minions[0].Name}/> */}
      {Minions.map( (ele, index) => Cards(ele) )}
    </div>
  );
}

export default App;