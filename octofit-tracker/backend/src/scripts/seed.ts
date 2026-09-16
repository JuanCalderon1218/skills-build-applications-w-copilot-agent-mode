import mongoose from 'mongoose';

const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/octofit_db';

// Seed the octofit_db database with test data.
async function seed() {
  try {
    await mongoose.connect(MONGO_URI);

    const db = mongoose.connection.db;

    await db.collection('users').insertMany([
      { name: 'Ana', email: 'ana@example.com' },
      { name: 'Juan', email: 'juan@example.com' }
    ]);

    await db.collection('teams').insertMany([
      { name: 'OctoFit Team A' },
      { name: 'OctoFit Team B' }
    ]);

    await db.collection('activities').insertMany([
      { activity: 'Running', duration: 30 },
      { activity: 'Cycling', duration: 45 }
    ]);

    await db.collection('leaderboard').insertMany([
      { name: 'Ana', score: 100 },
      { name: 'Juan', score: 90 }
    ]);

    await db.collection('workouts').insertMany([
      { name: 'Morning Workout', duration: 30 },
      { name: 'Evening Workout', duration: 45 }
    ]);

    console.log('Seed the octofit_db database with test data.');
  } finally {
    await mongoose.disconnect();
  }
}

seed().catch(console.error);
