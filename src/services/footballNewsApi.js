import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const requestHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  'X-RapidAPI-Key': process.env.REACT_APP_SECRET_KEY,
};
const createRequest = (url) => ({
  url,
  headers: requestHeaders,
});

export const footballNewsApi = createApi({
  reducerPath: 'footballNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bing-news-search1.p.rapidapi.com',
  }),
  endpoints: (builder) => ({
    getFootballNews: builder.query({
      query: () =>
        createRequest(
          '/news/search?q=Football&setLang=EN&freshness=Day&textFormat=Raw&safeSearch=Off&count=50'
        ),
    }),
  }),
});

export const { useGetFootballNewsQuery } = footballNewsApi;
