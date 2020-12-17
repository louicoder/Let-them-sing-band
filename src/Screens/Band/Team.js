import React from 'react';
import './Styles.scss';

const Team = ({ team, setActiveMember }) => {
  // console.log('Team in team', team);
  return (
    <div id="team-container">
      {team.map(({ role, description, image, name }) => (
        <div id="single-team-member-container" onClick={() => setActiveMember({ name, role, description, image })}>
          {image && <img src={image} />}
          {!image && <div style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#aaa' }} />}
          <div id="single-member-desc-container">
            <span>{name}</span>
            <span>{role}</span>
          </div>
        </div>
      ))}
      {Array.from({ length: 3 - team.length % 3 }).map(() => (
        <div id="single-team-member-container" className="empty-band-member" style={{ cursor: 'default' }} />
      ))}
    </div>
  );
};

export default Team;
