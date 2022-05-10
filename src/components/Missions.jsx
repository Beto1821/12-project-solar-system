import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <dir className="mission_card_container">
          {missions.map((item) => (
            <MissionCard
              name={ item.name }
              year={ item.year }
              country={ item.country }
              destination={ item.destination }
              key={ item.name }
            />
          ))}
        </dir>
      </div>
    );
  }
}

export default Missions;
