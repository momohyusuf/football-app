import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetTeamPlayersQuery } from '../services/footballInfoApi';
import logo from '../preloader.png';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function SinglePlayers() {
  const param = useParams();
  const id = param.playerId;
  const { season } = useSelector((state) => state.season);
  const { data, isLoading } = useGetTeamPlayersQuery({ season, id });
  const [value, setValue] = useState(0);

  if (isLoading) {
    return (
      <div className="preloader--container">
        <img src={logo} alt="" />
      </div>
    );
  }
  if (data?.response.length === 0) {
    return (
      <h3 className="single--player--container">
        Sorry no player bio-data available
      </h3>
    );
  }
  const { player, statistics } = data?.response[0];

  return (
    <div className="single--player--container">
      <article>
        <div className="player--image--container">
          <img className="player--image" src={player.photo} alt={player.name} />
        </div>
        <p>
          <strong>Player name:</strong> <span> {player.name}</span>
        </p>
        <p>
          <strong>First name:</strong> <span> {player.firstname}</span>
        </p>
        <p>
          <strong>Last name:</strong> <span>{player.lastname}</span>
        </p>
        <p>
          <strong>Nationality: </strong>
          <span> {player.nationality}</span>
        </p>

        <div>
          <p>
            {' '}
            <strong>Club:</strong> <span>{statistics[value].team.name}</span>
          </p>
          <img src={statistics[value].team.logo} alt="" />
        </div>

        <p>
          <strong>Age:</strong>
          <span> {player.age}</span>
        </p>
        <p>
          <strong>D.O.B:</strong> <span>{player.birth.date}</span>
        </p>
        <p>
          <strong>Height:</strong> <span>{player.height}</span>
        </p>
        <p>
          <strong>Weight:</strong> <span>{player.weight}</span>
        </p>
        <p>
          <strong>Season:</strong>
          <span> {statistics[value].league.season}</span>
        </p>

        {/* ????????? */}
        <section className="player--stats" key={statistics[value].league.id}>
          <h3>Player Stats</h3>
          <section>
            {' '}
            <MdChevronLeft
              className="left--icon"
              onClick={() =>
                setValue((value) => {
                  if (value === 0) {
                    value = statistics.length - 1;
                  }
                  return value - 1;
                })
              }
            />
            <MdChevronRight
              className="right--icon"
              onClick={() =>
                setValue((value) => {
                  if (value === statistics.length - 1) {
                    value = 0;
                  }
                  return value + 1;
                })
              }
            />
            <p className="player--league--stats">
              {statistics[value].league.name}
            </p>
            <dl>
              <dt>Games</dt>
              <dd>Position: {statistics[value].games.position}</dd>
              <dd>Appearance: {statistics[value].games.appearences}</dd>
              <dd>Minuties: {statistics[value].games.minutes}</dd>
              <dd>
                Average Rating:{' '}
                {parseInt(statistics[value].games.rating).toFixed(1)}
              </dd>
              <dt>Goals</dt>
              <dd>Scored: {statistics[value].goals.total}</dd>
              <dd>Conceded: {statistics[value].goals.conceded}</dd>
              <dd>Assists: {statistics[value].goals.assists}</dd>
              <dd>Saves: {statistics[value].goals.saves}</dd>
              <dt>Passes</dt>
              <dd>Total: {statistics[value].passes.total}</dd>
              <dd>Accuracy: {statistics[value].passes.accuracy}%</dd>
              <dd>Key Passes: {statistics[value].passes.key}</dd>
              <dt>Shots</dt>
              <dd>Total: {statistics[value].shots.total}</dd>
              <dd>On-Target: {statistics[value].shots.on}</dd>
              <dt>Tackles</dt>
              <dd>Total: {statistics[value].tackles.total}</dd>
              <dd>Blocks: {statistics[value].tackles.blocks}</dd>
              <dd>Interceptions: {statistics[value].tackles.interceptions}</dd>
              <dt>Substitutes</dt>
              <dd>In: {statistics[value].substitutes.in}</dd>
              <dd>Out: {statistics[value].substitutes.out}</dd>{' '}
              <dd>Bench: {statistics[value].substitutes.bench}</dd>
              <dt>Cards</dt>
              <dd>Yellow: {statistics[value].cards.yellow}</dd>
              <dd>Red: {statistics[value].cards.red}</dd>
              <dt>Dribbles</dt>
              <dd>Attempts: {statistics[value].dribbles.attempts}</dd>
              <dd>Success: {statistics[value].dribbles.success}</dd>
              <dd>Failed: {statistics[value].dribbles.pasts}</dd>
              <dt>Duels</dt>
              <dd>Total: {statistics[value].duels.total}</dd>
              <dd>Won: {statistics[value].duels.won}</dd>
              <dt>Fouls</dt>
              <dd>Drawn: {statistics[value].fouls.drawn}</dd>
              <dd>Comitted: {statistics[value].fouls.comitted}</dd>
            </dl>
          </section>
        </section>
      </article>
    </div>
  );
}

export default SinglePlayers;
