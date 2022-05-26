import { Routes, Route } from 'react-router-dom';
import SharedLayout from './Components/SharedLayout';
import Homepage from './Pages/Homepage';
import News from './Pages/News';
import Leagues from './Pages/Leagues';
import Players from './Pages/Players';
import Standings from './Pages/Standings';
import SingleTeam from './Pages/SingleTeam';
import SinglePlayers from './Pages/SinglePlayers';
import Error from './Pages/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="news" element={<News />} />
        <Route path="leagues" element={<Leagues />} />
        <Route path="players" element={<Players />} />

        <Route path="leagues/:standingId" element={<Standings />} />

        <Route path="leagues/:standingId/:teamsId" element={<SingleTeam />} />

        <Route
          path="leagues/:standingId/:teamsId/:playerId"
          element={<SinglePlayers />}
        />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
