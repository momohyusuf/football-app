import React from 'react';

function Statistics({ data }) {
  console.log(data);

  return (
    <section className="stats--container">
      <div>
        <h5>{data[0]?.teams.home.name}</h5>
        {data[0]?.statistics[0]?.statistics.map((item, index) => {
          return <p key={index}>{item.value === null ? 0 : item.value}</p>;
        })}
      </div>
      <div>
        <h5>Ball possessions</h5>
        {data[0]?.statistics[0]?.statistics.map((item, index) => {
          return <p key={index}>{item.type}</p>;
        })}
      </div>
      <div>
        <h5>{data[0]?.teams.away.name}</h5>
        {data[0]?.statistics[1]?.statistics.map((item, index) => {
          return <p key={index}>{item.value === null ? 0 : item.value}</p>;
        })}
      </div>
    </section>
  );
}

export default Statistics;
