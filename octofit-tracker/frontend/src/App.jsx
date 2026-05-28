import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../../../docs/octofitapp-small.png';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { apiBaseUrl, codespaceConfigHelp } from './lib/api';

function Home() {
  return (
    <section className="hero-shell">
      <div className="hero-copy">
        <p className="text-uppercase section-kicker mb-3">OctoFit Tracker</p>
        <h1 className="display-4 fw-semibold mb-3">Fitness data that feels live across every tier.</h1>
        <p className="lead text-secondary mb-4">
          React 19 presentation layer wired to the Express API for users, teams,
          activities, leaderboard updates, and workout suggestions.
        </p>
        <div className="hero-actions d-flex flex-wrap gap-3">
          <NavLink className="btn btn-primary btn-lg" to="/users">
            View Users
          </NavLink>
          <NavLink className="btn btn-outline-dark btn-lg" to="/activities">
            Review Activities
          </NavLink>
        </div>
      </div>
      <div className="hero-panel panel-card">
        <div className="small text-uppercase fw-semibold text-secondary mb-3">API Base URL</div>
        <code className="api-endpoint">{apiBaseUrl}</code>
        <p className="small text-secondary mt-3 mb-0">{codespaceConfigHelp}</p>
      </div>
    </section>
  );
}

function Layout({ children }) {
  const links = [
    ['Users', '/users'],
    ['Teams', '/teams'],
    ['Activities', '/activities'],
    ['Leaderboard', '/leaderboard'],
    ['Workouts', '/workouts'],
  ];

  return (
    <div className="app-shell">
      <nav className="navbar navbar-expand-lg border-bottom navbar-light app-nav">
        <div className="container py-2">
          <NavLink className="navbar-brand fw-semibold d-flex align-items-center gap-2" to="/">
            <img src={logo} alt="OctoFit logo" width="32" height="32" />
            OctoFit
          </NavLink>
          <div className="navbar-nav flex-wrap gap-2 ms-auto">
            {links.map(([label, to]) => (
              <NavLink
                key={to}
                className={({ isActive }) =>
                  `nav-link px-3 rounded-pill ${isActive ? 'active nav-pill-active' : 'nav-pill'}`
                }
                to={to}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="container py-4 py-lg-5">{children}</main>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />
      <Route
        path="/teams"
        element={
          <Layout>
            <Teams />
          </Layout>
        }
      />
      <Route
        path="/activities"
        element={
          <Layout>
            <Activities />
          </Layout>
        }
      />
      <Route
        path="/leaderboard"
        element={
          <Layout>
            <Leaderboard />
          </Layout>
        }
      />
      <Route
        path="/workouts"
        element={
          <Layout>
            <Workouts />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return <AppRoutes />;
}
