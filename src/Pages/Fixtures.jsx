import React, { useState } from 'react';
import { useGetFixturesQuery } from '../services/footballInfoApi';
import logo from '../preloader.png';
import moment from 'moment';
import { Link } from 'react-router-dom';

function Fixtures() {
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const [date, setDate] = useState(
    `${currentYear}-${
      currentMonth < 10 ? 0 + '' + currentMonth : currentMonth
    }-${currentDate < 10 ? 0 + '' + currentDate : currentDate}`
  );

  const { data, isLoading } = useGetFixturesQuery(date);
  function handleInput(e) {
    e.preventDefault();
    setDate(e.target.value);
  }
  if (isLoading) {
    return (
      <div className="preloader--container">
        <img src={logo} alt="" />
      </div>
    );
  }
  const teams = [...new Set(data?.response)];
  return (
    <section className="fixtures--section--container">
      <input
        type="date"
        name="data"
        id="date"
        value={date}
        onChange={handleInput}
      />

      <article>
        {teams.map((fixtures) => {
          console.log(fixtures);
          return (
            <>
              <div key={fixtures.fixture.id}>
                <div className="fixtures--header">
                  <img
                    src={
                      fixtures.league.flag ||
                      'https://logos-download.com/wp-content/uploads/2017/11/FIFA_logo_colored.png'
                    }
                    alt=""
                  />
                  <p>{fixtures.league.country}</p>
                </div>
                <div className="fixtures--league--logo">
                  <img src={fixtures.league.logo} alt="" />
                </div>
                <Link to={`/leagues/${fixtures.league.id}`}>
                  <p>{fixtures.league.name}</p>
                </Link>
                <div className="fixtures--playing--team--container">
                  <div className="fixture--game--time">
                    <small>{moment(fixtures.fixture.date).calendar()}</small>
                  </div>
                  <section>
                    <div className="fixtures--team--container">
                      <span className="team"> {fixtures.teams.home.name} </span>
                      <span style={{ color: 'red' }}>
                        {fixtures.goals.home}
                      </span>
                    </div>
                    <div className="fixtures--team--container">
                      <span className="team"> {fixtures.teams.away.name} </span>
                      <span style={{ color: 'red' }}>
                        {fixtures.goals.away}
                      </span>
                    </div>
                  </section>
                </div>
              </div>
            </>
          );
        })}
      </article>
    </section>
  );
}

export default Fixtures;
