export const jobs = [
  {
    id: 1,
    type: 'hourly',
    schedule: { minute: 15 },
    task: () => console.log('Hello World from HOURLY job'),
    createdAt: new Date(),
  },
];
