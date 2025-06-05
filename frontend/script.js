const API = 'http://localhost:3000';

async function loadJobs() {
  const res = await axios.get(`${API}/jobs`);
  const jobList = document.getElementById('jobList');
  jobList.innerHTML = '';
  res.data.forEach((job) => {
    const li = document.createElement('li');
    li.textContent = `#${job.id} | ${job.type.toUpperCase()} | ${JSON.stringify(
      job.schedule
    )} | Created: ${new Date(job.createdAt).toLocaleString()}`;
    jobList.appendChild(li);
  });
}

document.getElementById('type').addEventListener('change', (e) => {
  const type = e.target.value;
  document.getElementById('weekdayLabel').style.display =
    type === 'weekly' ? 'block' : 'none';
});

document.getElementById('jobForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const type = document.getElementById('type').value;
  const hour = parseInt(document.getElementById('hour').value);
  const minute = parseInt(document.getElementById('minute').value);
  const dayOfWeek = parseInt(document.getElementById('dayOfWeek').value);

  let schedule = { minute };
  if (type === 'daily' || type === 'weekly') schedule.hour = hour;
  if (type === 'weekly') schedule.dayOfWeek = dayOfWeek;

  await axios.post(`${API}/jobs`, { type, schedule });
  loadJobs();
});

loadJobs();
