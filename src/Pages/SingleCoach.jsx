import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleCoachQuery } from '../services/footballInfoApi';
import logo from '../preloader.png';
import Trophies from '../Components/Trophies';

function SingleCoach() {
  const param = useParams();
  const id = param.teamId;
  const { data, isLoading } = useGetSingleCoachQuery(id);
  const [current, setCurrent] = useState('Career');

  if (isLoading) {
    return (
      <div className="preloader--container">
        <img src={logo} alt="" />
      </div>
    );
  }
  function currentValue(e) {
    setCurrent(e.target.innerText);
  }
  console.log(data.response[0]);
  return (
    <section className="coach--info--container">
      <img src={data?.response[0].photo} alt="" />
      <p>
        <strong> Name:</strong> {data?.response[0].name}
      </p>
      <p>
        <strong>Age:</strong> {data?.response[0].age}
      </p>
      <p>
        {' '}
        <strong>First Name:</strong> {data?.response[0].firstname}
      </p>
      <p>
        <strong>Last Name:</strong> {data?.response[0].lastname}
      </p>
      <p>
        <strong>Nationality: </strong>
        {data?.response[0].nationality}
      </p>
      <p>
        <strong>D.O.B:</strong> {data?.response[0].birth.date}
      </p>
      <p>
        <strong>Height:</strong> {data?.response[0].height}
      </p>
      <p>
        <strong>Weight:</strong> {data?.response[0].weight}
      </p>
      <p>
        <strong>Club:</strong> {data?.response[0].team.name}
      </p>

      <div className="career--container">
        <div className="coach--tab">
          <h4
            className={`${current === 'Career' ? 'active--tab' : null}`}
            onClick={currentValue}
          >
            Career
          </h4>
          <h4
            className={`${current === 'Trophies' ? 'active--tab' : null}`}
            onClick={currentValue}
          >
            Trophies
          </h4>
        </div>
        {current === 'Career' ? (
          data?.response[0].career.map((team, index) => {
            return (
              <div key={index}>
                <p>Club: {team.team.name}</p>
                <img src={team.team.logo} alt="" />
                <p>Started: {team.start}</p>
                <p>Ended: {team.end || 'Current'}</p>
              </div>
            );
          })
        ) : (
          <Trophies coachs={data?.response[0]?.id} />
        )}
      </div>
    </section>
  );
}

export default SingleCoach;
