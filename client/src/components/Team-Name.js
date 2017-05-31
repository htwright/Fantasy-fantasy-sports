import React from 'react';
const TeamName = () => {
  const imgUrl = 'http://i.cdn.turner.com/nba/nba/teamsites/images/legacy/warriors/LogoPrimary_300x329.jpg';
  return (
    <div>
      <span>
        <img src={imgUrl} height={75} width={75} />
        <h3>Golden State Warriors</h3>
      </span>
    </div>
  )
}

export default TeamName;