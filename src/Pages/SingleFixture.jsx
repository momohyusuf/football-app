import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleFixtureQuery } from '../services/footballInfoApi';
import logo from '../preloader.png';
import Details from '../Components/singleFeaturesComponents/Details';
import Lineup from '../Components/singleFeaturesComponents/Lineup';
import Statistics from '../Components/singleFeaturesComponents/Statistics';

export default function SingleFixture() {
  const [display, setDisplay] = useState('Details');
  const param = useParams();
  const { data, isLoading } = useGetSingleFixtureQuery(param.fixtureId);
  if (isLoading) {
    return (
      <div className="preloader--container">
        <img src={logo} alt="" />
      </div>
    );
  }
  function currentValue(e) {
    setDisplay(e.target.innerText);
  }

  return (
    <section className="single--fixture--container">
      <ul className="single--fixture--nav">
        <li
          className={`${display === 'Details' ? 'active--fixture--btn' : null}`}
          onClick={currentValue}
        >
          Details
        </li>
        <li
          className={`${display === 'Lineup' ? 'active--fixture--btn' : null}`}
          onClick={currentValue}
        >
          Lineup
        </li>
        <li
          className={`${
            display === 'Statistics' ? 'active--fixture--btn' : null
          }`}
          onClick={currentValue}
        >
          Statistics
        </li>
      </ul>
      {display === 'Details' && <Details data={data?.response} />}
      {display === 'Lineup' && <Lineup data={data?.response} />}
      {display === 'Statistics' && <Statistics data={data?.response} />}
    </section>
  );
}
