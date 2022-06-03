import React from 'react';
import { useGetFootballNewsQuery } from '../services/footballNewsApi';
import moment from 'moment';
import logo from '../preloader.png';

function News({ first }) {
  const { isLoading, data } = useGetFootballNewsQuery();

  if (isLoading) {
    return (
      <div className="preloader--container">
        <img src={logo} alt="" />
      </div>
    );
  }

  return (
    <>
      <section className="news--section--container">
        {first && <h2 className="football--news--heading">Football News</h2>}
        <div className="news--container">
          {data?.value.slice(0, first ? 3 : 100).map((news, index) => (
            <article key={index} className="news--content">
              <img
                className="news--content--image"
                src={
                  news?.image?.thumbnail?.contentUrl ||
                  'https://logos-download.com/wp-content/uploads/2017/11/FIFA_logo_colored.png'
                }
                alt={news.name}
              />
              <h3>{news.name}</h3>
              <p className="news--content--description">
                {news.description}...{' '}
                <a
                  className="more--news--link"
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </p>
              <div className="news--content--footer">
                <div>
                  <p className="news--content--provider">
                    {news.provider[0].name}
                  </p>
                  <img
                    src={news.provider[0]?.image?.thumbnail?.contentUrl}
                    alt=""
                    className="news--content--provider--logo"
                  />
                </div>

                <p className="date--published">
                  {moment(news.datePublished).startOf('hour').fromNow()}{' '}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default News;
