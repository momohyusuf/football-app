import React from 'react';
import { useGetFootballStandingQuery } from '../services/footballInfoApi';
import Topscorers from './Topscorers';
import { Link } from 'react-router-dom';
import logo from '../preloader.png';

function LeagueStandings({ season, id }) {
  const { isLoading, data } = useGetFootballStandingQuery({ season, id });

  if (isLoading) {
    return (
      <div className="preloader--container">
        <img src={logo} alt="" />
      </div>
    );
  }

  const { response } = data;
  if (response.length === 0) {
    return (
      <h3 className="single--player--container">
        No information available yet
      </h3>
    );
  }
  // for cup standing
  if (response[0]?.league.standings.length > 1) {
    return (
      <section className="league--standing--section">
        <div className="league--standing--country--info">
          <h1>{response[0].league.country}</h1>
          <img
            src={
              response[0].league.flag ||
              'https://pbs.twimg.com/profile_images/1332237534022275072/BXvVbRR6_400x400.png'
            }
            alt=""
          />
        </div>
        <div className="league--standing--club--info">
          <h2>{response[0].league.name}</h2>
          <img src={response[0].league.logo} alt="" />
        </div>

        {response[0].league.standings.map((item) => {
          return (
            <table>
              <thead>
                <tr>
                  <th>Group</th>
                  <th>P</th>
                  <th>Team</th>
                  <th>Pl</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>G</th>
                  <th>AGs</th>
                  <th>Pts</th>
                </tr>
              </thead>

              {item.map((teams) => {
                return (
                  <tbody>
                    <tr>
                      <td>{teams.group}</td>
                      <td>{teams.rank}</td>
                      <td className="league--standing--team--name">
                        <img
                          className="team--logo"
                          src={teams.team.logo}
                          alt=""
                        />
                        <Link to={`${teams.team.id}`}> {teams.team.name}</Link>
                      </td>
                      <td>{teams.all.played}</td>
                      <td>{teams.all.win}</td>
                      <td>{teams.all.draw}</td>
                      <td>{teams.all.lose}</td>
                      <td>{teams.all.goals.for}</td>
                      <td>{teams.all.goals.against}</td>
                      <td>{teams.points}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          );
        })}

        <Topscorers season={season} id={id} />
      </section>
    );
  }
  //for league standing
  return (
    <section className="league--standing--section">
      <div className="league--standing--country--info">
        <h1>{response[0].league.country}</h1>
        <img src={response[0].league.flag} alt="" />
      </div>
      <div className="league--standing--club--info">
        <h2>{response[0].league.name}</h2>
        <img src={response[0].league.logo} alt="" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>PL</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>F</th>
            <th>AG</th>
            <th>Pts</th>
          </tr>
        </thead>
        {response[0].league.standings[0].map((item) => {
          return (
            <tbody key={item.rank}>
              <tr>
                <td>{item.rank}</td>
                <td className="league--standing--team--name">
                  {' '}
                  <img className="team--logo" src={item.team.logo} alt="" />
                  <Link to={`${item.team.id}`}>{item.team.name}</Link>
                </td>
                <td>{item.all.played}</td>
                <td>{item.all.win}</td>
                <td>{item.all.draw}</td>
                <td>{item.all.lose}</td>
                <td>{item.all.goals.for}</td>
                <td>{item.all.goals.against}</td>
                <td>{item.points}</td>
              </tr>
            </tbody>
          );
        })}
      </table>

      <Topscorers season={season} id={id} />
    </section>
  );
}

export default LeagueStandings;
