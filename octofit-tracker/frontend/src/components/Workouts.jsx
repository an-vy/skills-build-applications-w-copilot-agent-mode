import ResourcePage from './ResourcePage';

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'focusAreas', label: 'Focus Areas' },
];

export default function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      endpoint={workoutsEndpoint}
      description="Explore suggested workout plans tailored for beginner through advanced students."
      emptyMessage="No workouts are available yet. Seed the backend to see recommendations."
      columns={columns}
    />
  );
}