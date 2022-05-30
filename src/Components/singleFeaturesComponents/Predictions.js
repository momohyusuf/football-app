import React from 'react';
import { useGetSinglePredictionQuery } from '../../services/footballInfoApi';
import logo from '../../preloader.png';

function Predictions({ fixtures }) {
  const { data, isLoading } = useGetSinglePredictionQuery(fixtures);

  if (isLoading) {
    return (
      <div className="preloader--container">
        <img src={logo} alt="" />
      </div>
    );
  }
  return (
    <section>
      <section className="stats--container">
        <div>
          <h5>{data?.response[0]?.teams?.home?.name}</h5>
          <p>{data?.response[0]?.comparison?.att?.home}</p>
          <p>{data?.response[0]?.comparison?.def?.home}</p>
          <p>{data?.response[0]?.comparison?.form?.home}</p>
          <p>{data?.response[0]?.comparison?.goals?.home}</p>
          <p>{data?.response[0]?.comparison?.h2h?.home}</p>
          <p>{data?.response[0]?.comparison?.total?.home}</p>
        </div>
        <div>
          <h5>Comparisons</h5>
          <p>Attacking</p>
          <p>Defending</p>
          <p>Form</p>
          <p>Goals</p>
          <p>h2h</p>
          <p>Total</p>
        </div>
        <div>
          <h5>{data?.response[0]?.teams?.away?.name}</h5>
          <p>{data?.response[0]?.comparison?.att?.away}</p>
          <p>{data?.response[0]?.comparison?.def?.away}</p>
          <p>{data?.response[0]?.comparison?.form?.away}</p>
          <p>{data?.response[0]?.comparison?.goals?.away}</p>
          <p>{data?.response[0]?.comparison?.h2h?.away}</p>
          <p>{data?.response[0]?.comparison?.total?.away}</p>
        </div>
      </section>

      <section>
        <h5>Advice</h5>
        <div className="predictions--advice--container">
          <p>{data?.response[0].predictions.advice}</p>
          <p>Goals</p>
          <small>Home: {data?.response[0].predictions.goals.home}</small>{' '}
          <small>Away: {data?.response[0].predictions.goals.away}</small>
          <p>Possibilities</p>
          <small>Home: {data?.response[0].predictions.percent.home}</small>{' '}
          <small>Draw: {data?.response[0].predictions.percent.draw}</small>{' '}
          <small>Away: {data?.response[0].predictions.percent.away}</small>
        </div>
      </section>
      <section
        className="fixtures--section--container"
        style={{ paddingTop: '1em', paddingInline: '0px' }}
      >
        <h5>Head to Head</h5>
        {data?.response[0]?.h2h.map((matches) => {
          return (
            <div key={matches.fixture.id}>
              <div className="fixtures--header">
                <img src={matches.league.logo} alt="" />
                <p>{matches.league.name}</p>
              </div>

              <div className="fixtures--playing--team--container">
                <small>
                  {new Date(matches.fixture.date).toLocaleDateString()}
                </small>

                <div>
                  <p className="fixtures--team--container">
                    {matches.teams.home.name}{' '}
                    <span style={{ color: 'red' }}>{matches.goals.home}</span>{' '}
                  </p>
                  <p className="fixtures--team--container">
                    {matches.teams.away.name}{' '}
                    <span style={{ color: 'red' }}>{matches.goals.away}</span>{' '}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default Predictions;
