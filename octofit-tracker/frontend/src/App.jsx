import { Link, Route, Routes } from 'react-router-dom';
import logo from '../../../docs/octofitapp-small.png';

function Home() {
  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
      <p className="lead mb-0">Modern multi-tier fitness tracking platform.</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container py-5">
      <h2 className="h3">Dashboard</h2>
      <p className="mb-0">Activity, leaderboard, and workouts will render here.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container">
          <span className="navbar-brand fw-semibold d-flex align-items-center gap-2">
            <img src={logo} alt="OctoFit logo" width="28" height="28" />
            OctoFit
          </span>
          <div className="navbar-nav flex-row gap-3">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
