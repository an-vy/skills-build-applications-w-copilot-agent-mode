import ResourcePage from './ResourcePage';

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

const columns = [
  { key: 'userName', label: 'User' },
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'points', label: 'Points' },
];

export default function Activities() {
  return (
    <ResourcePage
      title="Activities"
      endpoint={activitiesEndpoint}
      description="Track recent workouts, movement sessions, and points earned across the app."
      emptyMessage="No activities are available yet. Seed the backend or add a new activity."
      columns={columns}
    />
  );
}