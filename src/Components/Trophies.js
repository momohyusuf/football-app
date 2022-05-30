import React from 'react';
import { useGetTrophiesCoachQuery } from '../services/footballInfoApi';
import logo from '../preloader.png';

function Trophies({ coachs }) {
  const { data, isLoading } = useGetTrophiesCoachQuery(coachs);
  if (isLoading) {
    return (
      <div className="preloader--container">
        <img src={logo} alt="" />
      </div>
    );
  }

  return (
    <div>
      {data?.response.map((trophy, index) => {
        return (
          <article className="trophy--container" key={index}>
            <p>{trophy.country}</p>
            <p>{trophy.season}</p>
            <p>{trophy.league}</p>
            <p>{trophy.place}</p>
          </article>
        );
      })}
    </div>
  );
}

export default Trophies;
