import React from 'react';
import { Link } from 'react-router-dom';
import { useGetTeamSquadQuery } from '../services/footballInfoApi';

function TeamPlayers({ iDs }) {
  const team = parseInt(iDs.teamsId);
  const { data } = useGetTeamSquadQuery(team);

  return (
    <div className="team--players">
      <h4 className="team--players--heading">Team Players</h4>
      {data?.response[0]?.players.map((player) => {
        return (
          <Link to={`${player.id}`} key={player.id}>
            <div>
              {' '}
              <span style={{ color: 'red' }}>{player.number}</span>{' '}
              {player.name} <br />
              <small>{player.position}</small>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default TeamPlayers;
