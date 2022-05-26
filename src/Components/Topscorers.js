import React from 'react';
import { useGetTopScorersQuery } from '../services/footballInfoApi';
import { Link } from 'react-router-dom';

function Topscorers({ season, id }) {
  const { isLoading, data } = useGetTopScorersQuery({ season, id });

  console.log(data);
  return (
    <div>
      <h2>Top Scorers and assists</h2>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Name</th>
            <th>Goals</th>
            <th>Assists</th>
          </tr>
        </thead>

        {data?.response.map((goals, index) => {
          return (
            <tbody key={goals.player.id}>
              <tr>
                <td>{index + 1}</td>
                <td>
                  {' '}
                  <img
                    src={goals.statistics[0].team.logo}
                    alt=""
                    className="scorer--logo"
                  />{' '}
                  <Link
                    className="topscorer--team"
                    to={`${goals.statistics[0].team.id}`}
                  >
                    {goals.statistics[0].team.name}
                  </Link>
                </td>
                <td>{goals.player.name}</td>
                <td>{goals.statistics[0].goals.total}</td>
                <td>{goals.statistics[0].goals.assists}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Topscorers;
