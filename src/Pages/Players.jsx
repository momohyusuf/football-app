import React from 'react';
import { useGetFootballInfoQuery } from '../services/footballInfoApi';

function Players() {
  console.log(useGetFootballInfoQuery());
  return <div>Players</div>;
}

export default Players;
