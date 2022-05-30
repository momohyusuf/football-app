import React from 'react';
import { Link } from 'react-router-dom';

function Lineup({ data }) {
  if (data[0]?.lineups.length === 0) {
    return (
      <h3 className="single--player--container">
        Sorry no information available
      </h3>
    );
  }

  return (
    <section className="teams--lineup">
      {data[0]?.lineups.map((info, index) => {
        const {
          team: {
            colors: {
              player: { primary, number, border },
            },
          },
        } = info;
        const style = {
          backgroundColor: `#${primary}`,
          color: `#${number}`,
          border: `3px solid ${border}`,
          margin: '5px',
          padding: '0.2em',
        };

        return (
          <article key={index}>
            <div className="teams--lineup--header">
              <img src={info.team.logo} alt="" />
              <p>
                {' '}
                <strong>{info.team.name}</strong>
              </p>
            </div>
            <div className="team--lineup--coach">
              <Link to={`${info.team.id}`}>
                <img src={info.coach.photo} alt="" />
                <p> {info.coach.name}</p>
              </Link>
              <small>coach</small>
              <p>
                <strong>Formation:</strong> {info.formation}
              </p>
              <h5>Starting XI</h5>
            </div>

            {info?.startXI.map((player) => {
              return (
                <div className="team--starting--xi" key={player.player.id}>
                  <Link to={`/leagues/standingId/teamId/${player.player.id}`}>
                    <p>
                      {' '}
                      <span>{player.player.pos}</span>
                      <span style={style}>{player.player.number}</span>
                      {player.player.name}
                    </p>
                  </Link>
                </div>
              );
            })}
            <h5> Substitutes:</h5>
            {info?.substitutes.map((player) => {
              return (
                <div className="team--substitutes" key={player.player.id}>
                  <Link to={`/leagues/standingId/teamId/${player.player.id}`}>
                    <p>
                      {' '}
                      <span>{player.player.pos}</span>
                      <span style={style}>{player.player.number}</span>
                      {player.player.name}
                    </p>
                  </Link>
                </div>
              );
            })}
          </article>
        );
      })}
    </section>
  );
}

export default Lineup;
