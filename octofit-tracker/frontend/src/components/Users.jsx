import ResourcePage from './ResourcePage';

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/';

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
      endpoint={usersEndpoint}
      description="View student profiles, fitness levels, and accumulated activity points."
      emptyMessage="No users are available yet. Seed the backend or add a new user."
      columns={columns}
    />
  );
}