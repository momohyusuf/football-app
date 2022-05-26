import React from 'react';
import { Link } from 'react-router-dom';
import { useGetFootballLeaguesQuery } from '../services/footballInfoApi';
import logo from '../preloader.png';

function CountryLeagues({ selectCountry }) {
  const { data, isLoading } = useGetFootballLeaguesQuery(selectCountry.country);

  if (isLoading) {
    return (
      <div className="preloader--container">
        <img src={logo} alt="" />
      </div>
    );
  }

  return (
    <section className="league--section">
      {data?.response.map((leagues) => {
        const {
          league: { id, name, type, logo },
        } = leagues;

        return (
          <Link to={`${id}`} key={id}>
            <article className="league--information--box">
              <img className="league--section--logo" src={logo} alt={name} />
              <h5 className="league--name">Name: {name}</h5>
              <p className="league--cup--type">Type: {type}</p>
            </article>
          </Link>
        );
      })}
    </section>
  );
}

export default CountryLeagues;
