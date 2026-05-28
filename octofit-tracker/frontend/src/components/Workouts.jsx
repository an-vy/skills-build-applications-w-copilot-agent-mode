import ResourcePage from './ResourcePage';

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
      resource="workouts"
      description="Explore suggested workout plans tailored for beginner through advanced students."
      emptyMessage="No workouts are available yet. Seed the backend to see recommendations."
      columns={columns}
    />
  );
}