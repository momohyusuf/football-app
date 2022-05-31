import React, { useState } from 'react';
import News from './News';
import Fixtures from './Fixtures';

function Homepage() {
  const [first, setfirst] = useState(true);
  return (
    <>
      <main>
        <section className="homepage--content--container">
          <article className="news--section">
            <h2>Football News</h2>
            <News first={first} />
            <Fixtures first={first} />
          </article>
        </section>
      </main>
      <footer>
        <p>
          <span>&copy;</span> Starkweb Technologies <br /> starkweb2@gmail.com
        </p>
      </footer>
    </>
  );
}

export default Homepage;
