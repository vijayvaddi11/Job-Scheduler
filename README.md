# Job-Scheduler

## 📌 Problem Statement

The goal is to build a backend system that allows:

- Creating jobs with a schedule.
- Triggering the job at the configured time.
- Repeating jobs at regular intervals (hourly, daily, weekly).

### Example Use Cases

- ⏰ **Hourly Job**: Run every hour at the 15th minute.
- 📅 **Daily Job**: Run every day at 3:00 PM.
- 📆 **Weekly Job**: Run every Monday at 10:00 AM.

---


![Campgrounds Screenshot](https://res.cloudinary.com/vijayvaddi/image/upload/v1749103375/kzp13jzckezwnmph0u7c.png)

---

## 🧠 Thought Process

- Approach starts from **lower complexity (hourly)** to **higher complexity (daily, weekly)**.
- Configurable job schema using MongoDB.
- Scheduled execution using `node-cron`.
- User-defined job setup via API or frontend UI.
- Modular and extendable structure for future enhancements.

---

## 🛠️ Tech Stack

- **Backend:** Node.js , Express
- **Database:** MongoDB , Mongoose
- **Frontend:** HTML, CSS, JS
- **Scheduler:** node-cron

---
## 🧑‍💻 How to Run Locally


```bash
1. ### 📁 Clone the repository

git clone https://github.com/your-username/job-scheduler.git
cd job-scheduler




2. ### 📦 Install backend dependencies

cd backend

npm install

3. ### ⚙️ Environment Variables

Create a .env file inside /backend and configure:

PORT=5500
MONGODB_URI=mongodb://localhost:27017/jobscheduler



4.  ### ▶️ Start the backend


npm start


