import ResourcePage from './ResourcePage';

const columns = [
  { key: 'name', label: 'User' },
  { key: 'email', label: 'Email' },
  { key: 'fitnessLevel', label: 'Fitness Level' },
  { key: 'points', label: 'Points' },
];

export default function Users() {
  return (
    <ResourcePage
      title="Users"
      resource="users"
      description="View student profiles, fitness levels, and accumulated activity points."
      emptyMessage="No users are available yet. Seed the backend or add a new user."
      columns={columns}
    />
  );
}