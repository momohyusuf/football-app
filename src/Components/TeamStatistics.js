import React from 'react';
import { useGetTeamStatisticsQuery } from '../services/footballInfoApi';

function TeamStatistics({ season, iDs }) {
  const { standingId, teamsId } = iDs;
  let league = parseInt(standingId);
  let team = parseInt(teamsId);

  const { data, isLoading } = useGetTeamStatisticsQuery({
    league,
    season,
    team,
  });

  if (isLoading) return 'loading';

  let form = data?.response.form.split('');

  return (
    <div>
      <h4>Season: {season}</h4>
      <h5>{data?.response.league.name}</h5>
      <dl>
        <dt>Biggest</dt>
        <dd>
          Wins: Home {data?.response.biggest.wins.home} Away{' '}
          {data?.response.biggest.wins.away}
        </dd>
        <dd>
          Loses: Home {data?.response.biggest.loses.home} Away{' '}
          {data?.response.biggest.loses.away}
        </dd>
        <dd>
          Streak: wins {data?.response.biggest.streak.wins}, Draw{' '}
          {data?.response.biggest.streak.draws}, Loses{' '}
          {data?.response.biggest.streak.loses}
        </dd>
        <dt>Clean Sheet: {data?.response.clean_sheet.total}</dt>
        <dt>Fixtures</dt>
        <dd>Wins: {data?.response.fixtures.wins.total}, </dd>
        <dd>Loses: {data?.response.fixtures.loses.total} </dd>
        <dd>Draws: {data?.response.fixtures.draws.total} </dd>
        <dt>Form</dt>
        <dd className="single--team--form">
          {form.map((item, index) => {
            if (item === 'L') {
              return (
                <p style={{ color: 'red' }} key={index}>
                  {item}
                </p>
              );
            } else if (item === 'W') {
              return (
                <p style={{ color: 'green' }} key={index}>
                  {item}
                </p>
              );
            } else if (item === 'D') {
              return (
                <p style={{ color: 'black' }} key={index}>
                  {item}
                </p>
              );
            }
          })}
        </dd>
        <dt>Goals</dt>
        <dd>Scored: {data?.response.goals.for.total.total} </dd>
        <dd>Conceded: {data?.response.goals.against.total.total}</dd>
        <dt>Formations</dt>
        {data?.response.lineups.map((item, index) => (
          <dd key={index}>{item.formation}</dd>
        ))}
        <dt>Penalty</dt>
        <dd>Scored: {data?.response.penalty.scored.total}</dd>
        <dd>Missed: {data?.response.penalty.missed.total}</dd>
      </dl>
    </div>
  );
}

export default TeamStatistics;
