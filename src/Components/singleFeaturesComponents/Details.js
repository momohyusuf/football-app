import React from 'react';

function Details({ data }) {
  return (
    <section>
      {
        <>
          <div className="details--header">
            <img src={data[0].league.logo} alt="" />
            <p>
              {data[0].league.name}. {data[0].league.round}
            </p>
          </div>
          <div className="details--teams--update">
            <p className="teams--name">
              {data[0].teams.home.name} - {data[0].teams.away.name}
            </p>

            <div className="details--team--logo--container">
              <img src={data[0].teams.home.logo} alt="" />
              <div className="details--scores">
                <p>
                  {data[0].score.fulltime.home} - {data[0].score.fulltime.away}
                </p>
                <p>
                  ({data[0].score.halftime.home} - {data[0].score.halftime.away}
                  )
                </p>
              </div>
              <img src={data[0].teams.away.logo} alt="" />
            </div>
            <div className="match--time">
              <span>{data[0].fixture.status.long}</span>{' '}
              <span>{data[0].fixture.status.elapsed}</span>{' '}
              <span>{data[0].fixture.status.extra}</span>
              <p>{new Date(data[0].fixture.date).toLocaleString()}</p>
            </div>
          </div>

          <p className="match--referee"> Referee: {data[0].fixture.referee}</p>

          <div className="events">
            {data[0]?.events.map((event, index) => {
              return (
                <div key={index}>
                  <article>
                    <div>
                      <span className="event--time">
                        {' '}
                        {parseInt(event.time.elapsed)}
                      </span>
                      <span className="event--type"> {event.type}</span>
                    </div>
                    <p>{event.player.name}</p>
                    <small>{event.detail}</small> <br />
                    <small>{event.comments}</small>
                  </article>
                </div>
              );
            })}
          </div>
        </>
      }
    </section>
  );
}

export default Details;
