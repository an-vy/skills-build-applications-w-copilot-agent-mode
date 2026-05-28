import ResourcePage from './ResourcePage';

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'name', label: 'Name' },
  { key: 'category', label: 'Category' },
  { key: 'score', label: 'Score' },
];

export default function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      endpoint={leaderboardEndpoint}
      description="Compare student and team performance with the latest ranking snapshots."
      emptyMessage="No leaderboard entries are available yet. Seed the backend to see rankings."
      columns={columns}
    />
  );
}