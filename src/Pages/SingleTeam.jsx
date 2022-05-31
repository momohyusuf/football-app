import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  useGetTeamInformationQuery,
  useGetSingleCoachQuery,
} from '../services/footballInfoApi';
import TeamStatistics from '../Components/TeamStatistics';
import TeamPlayers from '../Components/TeamPlayers';
import { MdLocationPin } from 'react-icons/md';
import logo from '../preloader.png';

function SingleTeam() {
  const param = useParams();
  const { season } = useSelector((state) => state.season);
  const { data, isLoading } = useGetTeamInformationQuery(param.teamsId);
  const { currentData } = useGetSingleCoachQuery(param.teamsId);
  if (isLoading) {
    return (
      <div className="preloader--container">
        <img src={logo} alt="" />
      </div>
    );
  }

  return (
    <section className="single--team--container">
      <div className="single--team--content">
        {data?.response.map((information) => {
          return (
            <article className="test" key={information.team.id}>
              <img src={information.team.logo} alt="" />
              <h3>{information.team.name}</h3>
              <h4>{information.team.code}</h4>
              <p>
                <strong>Founded:</strong> {information.team.founded}
              </p>
              <h5>
                Location <MdLocationPin className="location--icon" />{' '}
              </h5>

              <address>
                {' '}
                Country: {information.team.country}
                <br />
                Address: {information.venue.address}
                <br />
                City: {information.venue.city} <br />
                Stadium: {information.venue.name} <br />
                Capacity: {information.venue.capacity}
              </address>
              <img
                className="single--team--stadium--image"
                src={information.venue.image}
                alt=""
              />
            </article>
          );
        })}
        <h3>Team Statistics</h3>
        <TeamStatistics season={season} iDs={param} />
        <h5>Coach</h5>
        <Link to={`/Fixtures/fixtureId/${param.teamsId}`}>
          <p>{currentData?.response[0]?.name}</p>
        </Link>
        <TeamPlayers season={season} iDs={param} />
      </div>
    </section>
  );
}

export default SingleTeam;
