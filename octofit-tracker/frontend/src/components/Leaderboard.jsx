import ResourcePage from './ResourcePage';

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
      resource="leaderboard"
      description="Compare student and team performance with the latest ranking snapshots."
      emptyMessage="No leaderboard entries are available yet. Seed the backend to see rankings."
      columns={columns}
    />
  );
}