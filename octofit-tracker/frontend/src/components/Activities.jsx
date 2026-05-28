import ResourcePage from './ResourcePage';

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
      resource="activities"
      description="Track recent workouts, movement sessions, and points earned across the app."
      emptyMessage="No activities are available yet. Seed the backend or add a new activity."
      columns={columns}
    />
  );
}