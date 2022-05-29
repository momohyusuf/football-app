import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFootballSeasonsQuery } from '../services/footballInfoApi';
import LeagueStandings from '../Components/LeagueStandings';

import { useDispatch } from 'react-redux';
import { updateSeason } from '../features/seasons/seasonSlice';

function Standings() {
  const { isLoading, data } = useGetFootballSeasonsQuery();
  const [season, setSeason] = useState('2021');
  const param = useParams();
  const id = param.standingId;

  const dispatch = useDispatch();

  if (isLoading) return 'loading...';

  function handleChange(e) {
    setSeason(e.target.value);
    dispatch(updateSeason(e.target.value));
    e.preventDefault();
  }
  return (
    <section className="standing">
      {' '}
      <label htmlFor="seasons">Select a season </label>
      <select
        name="seasons"
        id="seasons"
        value={season}
        onChange={handleChange}
      >
        {data?.response.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <LeagueStandings season={season} id={id} />
    </section>
  );
}

export default Standings;
