import React from 'react';
import News from './News';

function Homepage() {
  return (
    <>
      <main>
        <section className="homepage--content--container">
          <article className="news--section">
            <h2>Football News</h2>
            <News />
          </article>
        </section>
      </main>
      <footer>
        <p>
          <span>&copy;</span>
          Starkweb Technologies
        </p>
      </footer>
    </>
  );
}

export default Homepage;
