import type { AddressInfo } from 'node:net';
import { createApp } from '../app';
import { connectToDatabase } from '../config/database';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Team from '../models/Team';
import User from '../models/User';
import Workout from '../models/Workout';

type ApiResponse = {
  items: unknown[];
};

const users = [
  {
    name: 'Mia Johnson',
    email: 'mia.johnson@mergington.edu',
    fitnessLevel: 'intermediate',
    points: 420,
  },
  {
    name: 'Liam Patel',
    email: 'liam.patel@mergington.edu',
    fitnessLevel: 'advanced',
    points: 560,
  },
  {
    name: 'Sofia Nguyen',
    email: 'sofia.nguyen@mergington.edu',
    fitnessLevel: 'beginner',
    points: 275,
  },
  {
    name: 'Noah Martinez',
    email: 'noah.martinez@mergington.edu',
    fitnessLevel: 'intermediate',
    points: 390,
  },
];

const teams = [
  {
    name: 'Cardio Crew',
    description: 'Students focused on run streaks and weekly cardio challenges.',
    memberCount: 8,
    totalPoints: 1480,
  },
  {
    name: 'Power Pods',
    description: 'Strength training squad for circuit workouts and conditioning.',
    memberCount: 6,
    totalPoints: 1265,
  },
  {
    name: 'Flex Force',
    description: 'Mobility-first team balancing stretching, yoga, and recovery.',
    memberCount: 5,
    totalPoints: 980,
  },
];

const activities = [
  {
    userName: 'Mia Johnson',
    type: 'Interval Run',
    durationMinutes: 35,
    caloriesBurned: 340,
    points: 95,
    performedAt: new Date('2026-05-24T15:30:00.000Z'),
  },
  {
    userName: 'Liam Patel',
    type: 'Strength Circuit',
    durationMinutes: 45,
    caloriesBurned: 410,
    points: 120,
    performedAt: new Date('2026-05-25T16:00:00.000Z'),
  },
  {
    userName: 'Sofia Nguyen',
    type: 'Brisk Walk',
    durationMinutes: 30,
    caloriesBurned: 180,
    points: 60,
    performedAt: new Date('2026-05-26T14:15:00.000Z'),
  },
  {
    userName: 'Noah Martinez',
    type: 'Basketball Conditioning',
    durationMinutes: 50,
    caloriesBurned: 430,
    points: 115,
    performedAt: new Date('2026-05-27T17:10:00.000Z'),
  },
  {
    userName: 'Mia Johnson',
    type: 'Core Training',
    durationMinutes: 25,
    caloriesBurned: 190,
    points: 70,
    performedAt: new Date('2026-05-27T18:20:00.000Z'),
  },
];

const leaderboardEntries = [
  {
    name: 'Liam Patel',
    category: 'student',
    score: 560,
    rank: 1,
  },
  {
    name: 'Mia Johnson',
    category: 'student',
    score: 420,
    rank: 2,
  },
  {
    name: 'Cardio Crew',
    category: 'team',
    score: 1480,
    rank: 1,
  },
  {
    name: 'Power Pods',
    category: 'team',
    score: 1265,
    rank: 2,
  },
];

const workouts = [
  {
    title: 'Starter Cardio Blast',
    difficulty: 'beginner',
    durationMinutes: 20,
    focusAreas: ['endurance', 'consistency'],
  },
  {
    title: 'Full Body Strength Express',
    difficulty: 'intermediate',
    durationMinutes: 30,
    focusAreas: ['strength', 'core'],
  },
  {
    title: 'Athlete Power Session',
    difficulty: 'advanced',
    durationMinutes: 45,
    focusAreas: ['power', 'agility', 'conditioning'],
  },
];

async function resetCollections(): Promise<void> {
  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({}),
  ]);
}

async function seedCollections(): Promise<void> {
  await Promise.all([
    User.insertMany(users),
    Team.insertMany(teams),
    Activity.insertMany(activities),
    Leaderboard.insertMany(leaderboardEntries),
    Workout.insertMany(workouts),
  ]);
}

async function verifyApiData(): Promise<void> {
  const app = createApp();
  const server = app.listen(0);

  try {
    await new Promise<void>((resolve, reject) => {
      server.once('listening', () => resolve());
      server.once('error', (error) => reject(error));
    });

    const { port } = server.address() as AddressInfo;
    const baseUrl = `http://127.0.0.1:${port}/api`;
    const endpoints = [
      'users',
      'teams',
      'activities',
      'leaderboard',
      'workouts',
    ] as const;

    for (const endpoint of endpoints) {
      const response = await fetch(`${baseUrl}/${endpoint}`);

      if (!response.ok) {
        throw new Error(`Verification failed for ${endpoint}: ${response.status}`);
      }

      const payload = (await response.json()) as ApiResponse;

      if (!Array.isArray(payload.items) || payload.items.length === 0) {
        throw new Error(`Verification failed for ${endpoint}: no records returned`);
      }

      console.log(`Verified /api/${endpoint} returned ${payload.items.length} records`);
    }
  } finally {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  }
}

async function seedDatabase(): Promise<void> {
  console.log('Seed the octofit_db database with test data');
  await connectToDatabase();
  await resetCollections();
  await seedCollections();
  await verifyApiData();
  console.log('Finished seeding octofit_db');
}

seedDatabase()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Failed to seed octofit_db', error);
    process.exit(1);
  });