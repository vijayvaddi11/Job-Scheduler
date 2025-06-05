import { jobs } from './jobs.js';

function checkAndRunJobs() {
  const now = new Date();
  const currentMinute = now.getMinutes();
  const currentHour = now.getHours();
  const currentDayOfWeek = now.getDay();

  for (const job of jobs) {
    const { type, schedule } = job;
    if (
      (type === 'hourly' && currentMinute === schedule.minute) ||
      (type === 'daily' &&
        currentHour === schedule.hour &&
        currentMinute === schedule.minute) ||
      (type === 'weekly' &&
        currentDayOfWeek === schedule.dayOfWeek &&
        currentHour === schedule.hour &&
        currentMinute === schedule.minute)
    ) {
      console.log(`Executing ${type.toUpperCase()} Job: Hello World`);
      job.lastExecuted = new Date();
    }
  }
}

export function startScheduler() {
  console.log('Scheduler running...');
  setInterval(checkAndRunJobs, 60 * 1000);
}
