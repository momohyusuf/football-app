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
  if (response.length === 0) return 'no record available at the moment';

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
