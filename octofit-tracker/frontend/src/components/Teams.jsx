import ResourcePage from './ResourcePage';

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
      resource="teams"
      description="Browse team rosters, progress summaries, and friendly competition standings."
      emptyMessage="No teams are available yet. Seed the backend or create a new team."
      columns={columns}
    />
  );
}