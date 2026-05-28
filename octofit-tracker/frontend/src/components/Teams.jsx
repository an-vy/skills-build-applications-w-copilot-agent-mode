import ResourcePage from './ResourcePage';

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'Description' },
  { key: 'memberCount', label: 'Members' },
  { key: 'totalPoints', label: 'Points' },
];

export default function Teams() {
  return (
    <ResourcePage
      title="Teams"
      endpoint={teamsEndpoint}
      description="Browse team rosters, progress summaries, and friendly competition standings."
      emptyMessage="No teams are available yet. Seed the backend or create a new team."
      columns={columns}
    />
  );
}