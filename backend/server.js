import express from 'express';
import cors from 'cors';
import { jobs } from './jobs.js';
import { startScheduler } from './scheduler.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/jobs', (req, res) => {
  const { type, schedule } = req.body;
  const newJob = {
    id: jobs.length + 1,
    type,
    schedule,
    task: () => console.log(`Hello World from ${type.toUpperCase()} job`),
    createdAt: new Date(),
  };
  jobs.push(newJob);
  res.status(201).json({ message: 'Job added', job: newJob });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
  startScheduler();
});
