import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headersRequest = {
  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  'X-RapidAPI-Key': process.env.REACT_APP_SECRET_KEY,
};

const createRequest = (url) => ({
  url,
  headers: headersRequest,
});

export const footballInfoApi = createApi({
  reducerPath: 'footballInfoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-football-v1.p.rapidapi.com',
  }),
  endpoints: (builder) => ({
    getFootballInfo: builder.query({
      query: () => createRequest('/countries'),
    }),
    getFootballLeagues: builder.query({
      query: (country) => createRequest(`/v3/leagues?country=${country}`),
    }),

    getFootballSeasons: builder.query({
      query: () => createRequest(`/v3/leagues/seasons`),
    }),

    getFootballStanding: builder.query({
      query: ({ season, id }) =>
        createRequest(`/v3/standings?season=${season}&league=${id}`),
    }),

    getTopScorers: builder.query({
      query: ({ season, id }) =>
        createRequest(`/v3/players/topscorers?season=${season}&league=${id}`),
    }),

    getTeamInformation: builder.query({
      query: (id) => createRequest(`/v3/teams?id=${id}`),
    }),

    getTeamStatistics: builder.query({
      query: ({ league, season, team }) =>
        createRequest(
          `/v3/teams/statistics?league=${league}&season=${season}&team=${team}`
        ),
    }),

    getTeamSquad: builder.query({
      query: (team) => createRequest(`/v3/players/squads?team=${team}`),
    }),
    getTeamPlayers: builder.query({
      query: ({ season, id }) =>
        createRequest(`/v3/players/?id=${id}&season=${season}`),
    }),

    getFixtures: builder.query({
      query: (date) => createRequest(`/v3/fixtures?date=${date}`),
    }),

    getSingleFixture: builder.query({
      query: (id) => createRequest(`/v3/fixtures?id=${id}`),
    }),

    getSinglePrediction: builder.query({
      query: (fixtures) => createRequest(`/v3/predictions?fixture=${fixtures}`),
    }),

    getSingleCoach: builder.query({
      query: (id) => createRequest(`/v3/coachs?team=${id}`),
    }),

    getTrophiesCoach: builder.query({
      query: (coachs) => createRequest(`/v3/trophies?coach=${coachs}`),
    }),
  }),
});

export const {
  useGetFootballInfoQuery,
  useGetFootballLeaguesQuery,
  useGetFootballSeasonsQuery,
  useGetFootballStandingQuery,
  useGetTopScorersQuery,
  useGetTeamInformationQuery,
  useGetTeamStatisticsQuery,
  useGetTeamSquadQuery,
  useGetTeamPlayersQuery,
  useGetFixturesQuery,
  useGetSingleFixtureQuery,
  useGetSinglePredictionQuery,
  useGetSingleCoachQuery,
  useGetTrophiesCoachQuery,
} = footballInfoApi;
