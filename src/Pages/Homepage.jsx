import React, { useState } from 'react';
import News from './News';
import Fixtures from './Fixtures';
import Leagues from './Leagues';

function Homepage() {
  const [first, setfirst] = useState(true);
  return (
    <>
      <main>
        <section className="homepage--content--container">
          <article className="news--section">
            <News first={first} />
            <Leagues first={first} />
            <Fixtures first={first} />
          </article>
        </section>
      </main>
      <footer>
        <p>
          <span>&copy;</span> 2022 Starkweb Technologies <br />{' '}
          <small> starkweb2@gmail.com</small>
        </p>
      </footer>
    </>
  );
}

export default Homepage;
