export const jobs = [
  {
    id: 1,
    type: 'hourly',
    schedule: {
      minute: 15, // 15th minute of every hour
    },
    task: () => console.log('Hello World from HOURLY job'),
  },
  {
    id: 2,
    type: 'daily',
    schedule: {
      hour: 9,
      minute: 0,
    },
    task: () => console.log('Hello World from DAILY job'),
  },
  {
    id: 3,
    type: 'weekly',
    schedule: {
      dayOfWeek: 1, // Monday
      hour: 8,
      minute: 30,
    },
    task: () => console.log('Hello World from WEEKLY job'),
  },
];
