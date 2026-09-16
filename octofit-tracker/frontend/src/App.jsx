import { Link, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';

function App() {
  return (
    <div>
      <h1>OctoFit Tracker</h1>

      <nav>
        <Link to="/">Users</Link> |{' '}
        <Link to="/teams">Teams</Link> |{' '}
        <Link to="/activities">Activities</Link> |{' '}
        <Link to="/leaderboard">Leaderboard</Link> |{' '}
        <Link to="/workouts">Workouts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
