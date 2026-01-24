const Database = require("better-sqlite3");

const db = new Database("database.db");

db.prepare(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    notion TEXT
  )
`).run();

// таблица слотов
db.prepare(`
  CREATE TABLE IF NOT EXISTS time_slots (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    isActive INTEGER DEFAULT 1
  )
`).run();


db.prepare(`
  CREATE TABLE IF NOT EXISTS student_slots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL,
  slot_id INTEGER NOT NULL,
  comment TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (slot_id) REFERENCES time_slots(id),

  UNIQUE(slot_id) 
);


  `).run()


// db.prepare(`
//   INSERT INTO students (username) VALUES (?)
//   `).run('@USERNAME')

// db.prepare(`
//   DELETE FROM students WHERE username = ?;
//   `).run("@USERNAME");

const add = () =>{
  const testSlots = [
  { date: "2026-01-23", time: "10:00" },
  { date: "2026-01-23", time: "11:00" },
  { date: "2026-01-23", time: "12:00" },
  { date: "2026-01-23", time: "13:00" },
  { date: "2026-01-23", time: "14:00" },
  { date: "2026-01-23", time: "15:00" },
  { date: "2026-01-23", time: "16:00" },
  { date: "2026-01-23", time: "17:00" },
  { date: "2026-01-23", time: "18:00" },
  { date: "2026-01-23", time: "19:00" },
  { date: "2026-01-24", time: "10:00" },
  { date: "2026-01-24", time: "11:00" },
  { date: "2026-01-24", time: "12:00" },
  { date: "2026-01-24", time: "13:00" },
  { date: "2026-01-24", time: "14:00" },
  { date: "2026-01-24", time: "15:00" },
  { date: "2026-01-24", time: "16:00" },
  { date: "2026-01-24", time: "17:00" },
  { date: "2026-01-24", time: "18:00" },
  { date: "2026-01-24", time: "19:00" },
  { date: "2026-01-25", time: "10:00" },
  { date: "2026-01-25", time: "11:00" },
  { date: "2026-01-25", time: "12:00" },
  { date: "2026-01-25", time: "13:00" },
  { date: "2026-01-25", time: "14:00" },
  { date: "2026-01-25", time: "15:00" },
  { date: "2026-01-25", time: "16:00" },
  { date: "2026-01-25", time: "17:00" },
  { date: "2026-01-25", time: "18:00" },
  { date: "2026-01-25", time: "19:00" },
  { date: "2026-01-26", time: "10:00" },
  { date: "2026-01-26", time: "11:00" },
  { date: "2026-01-26", time: "12:00" },
  { date: "2026-01-26", time: "13:00" },
  { date: "2026-01-26", time: "14:00" },
  { date: "2026-01-26", time: "15:00" },
  { date: "2026-01-26", time: "16:00" },
  { date: "2026-01-26", time: "17:00" },
  { date: "2026-01-26", time: "18:00" },
  { date: "2026-01-26", time: "19:00" },
  { date: "2026-01-27", time: "10:00" },
  { date: "2026-01-27", time: "11:00" },
  { date: "2026-01-27", time: "12:00" },
  { date: "2026-01-27", time: "13:00" },
  { date: "2026-01-27", time: "14:00" },
  { date: "2026-01-27", time: "15:00" },
  { date: "2026-01-27", time: "16:00" },
  { date: "2026-01-27", time: "17:00" },
  { date: "2026-01-27", time: "18:00" },
  { date: "2026-01-27", time: "19:00" },
  { date: "2026-01-28", time: "10:00" },
  { date: "2026-01-28", time: "11:00" },
  { date: "2026-01-28", time: "12:00" },
  { date: "2026-01-28", time: "13:00" },
  { date: "2026-01-28", time: "14:00" },
  { date: "2026-01-28", time: "15:00" },
  { date: "2026-01-28", time: "16:00" },
  { date: "2026-01-28", time: "17:00" },
  { date: "2026-01-28", time: "18:00" },
  { date: "2026-01-28", time: "19:00" },
  { date: "2026-01-29", time: "10:00" },
  { date: "2026-01-29", time: "11:00" },
  { date: "2026-01-29", time: "12:00" },
  { date: "2026-01-29", time: "13:00" },
  { date: "2026-01-29", time: "14:00" },
  { date: "2026-01-29", time: "15:00" },
  { date: "2026-01-29", time: "16:00" },
  { date: "2026-01-29", time: "17:00" },
  { date: "2026-01-29", time: "18:00" },
  { date: "2026-01-29", time: "19:00" },
  { date: "2026-01-30", time: "10:00" },
  { date: "2026-01-30", time: "11:00" },
  { date: "2026-01-30", time: "12:00" },
  { date: "2026-01-30", time: "13:00" },
  { date: "2026-01-30", time: "14:00" },
  { date: "2026-01-30", time: "15:00" },
  { date: "2026-01-30", time: "16:00" },
  { date: "2026-01-30", time: "17:00" },
  { date: "2026-01-30", time: "18:00" },
  { date: "2026-01-30", time: "19:00" },
  { date: "2026-01-31", time: "10:00" },
  { date: "2026-01-31", time: "11:00" },
  { date: "2026-01-31", time: "12:00" },
  { date: "2026-01-31", time: "13:00" },
  { date: "2026-01-31", time: "14:00" },
  { date: "2026-01-31", time: "15:00" },
  { date: "2026-01-31", time: "16:00" },
  { date: "2026-01-31", time: "17:00" },
  { date: "2026-01-31", time: "18:00" },
  { date: "2026-01-31", time: "19:00" },
  { date: "2026-02-01", time: "10:00" },
  { date: "2026-02-01", time: "11:00" },
  { date: "2026-02-01", time: "12:00" },
  { date: "2026-02-01", time: "13:00" },
  { date: "2026-02-01", time: "14:00" },
  { date: "2026-02-01", time: "15:00" },
  { date: "2026-02-01", time: "16:00" },
  { date: "2026-02-01", time: "17:00" },
  { date: "2026-02-01", time: "18:00" },
  { date: "2026-02-01", time: "19:00" },
  { date: "2026-02-02", time: "10:00" },
  { date: "2026-02-02", time: "11:00" },
  { date: "2026-02-02", time: "12:00" },
  { date: "2026-02-02", time: "13:00" },
  { date: "2026-02-02", time: "14:00" },
  { date: "2026-02-02", time: "15:00" },
  { date: "2026-02-02", time: "16:00" },
  { date: "2026-02-02", time: "17:00" },
  { date: "2026-02-02", time: "18:00" },
  { date: "2026-02-02", time: "19:00" },
  { date: "2026-02-03", time: "10:00" },
  { date: "2026-02-03", time: "11:00" },
  { date: "2026-02-03", time: "12:00" },
  { date: "2026-02-03", time: "13:00" },
  { date: "2026-02-03", time: "14:00" },
  { date: "2026-02-03", time: "15:00" },
  { date: "2026-02-03", time: "16:00" },
  { date: "2026-02-03", time: "17:00" },
  { date: "2026-02-03", time: "18:00" },
  { date: "2026-02-03", time: "19:00" },
  { date: "2026-02-04", time: "10:00" },
  { date: "2026-02-04", time: "11:00" },
  { date: "2026-02-04", time: "12:00" },
  { date: "2026-02-04", time: "13:00" },
  { date: "2026-02-04", time: "14:00" },
  { date: "2026-02-04", time: "15:00" },
  { date: "2026-02-04", time: "16:00" },
  { date: "2026-02-04", time: "17:00" },
  { date: "2026-02-04", time: "18:00" },
  { date: "2026-02-04", time: "19:00" },
  { date: "2026-02-05", time: "10:00" },
  { date: "2026-02-05", time: "11:00" },
  { date: "2026-02-05", time: "12:00" },
  { date: "2026-02-05", time: "13:00" },
  { date: "2026-02-05", time: "14:00" },
  { date: "2026-02-05", time: "15:00" },
  { date: "2026-02-05", time: "16:00" },
  { date: "2026-02-05", time: "17:00" },
  { date: "2026-02-05", time: "18:00" },
  { date: "2026-02-05", time: "19:00" },
  { date: "2026-02-06", time: "10:00" },
  { date: "2026-02-06", time: "11:00" },
  { date: "2026-02-06", time: "12:00" },
  { date: "2026-02-06", time: "13:00" },
  { date: "2026-02-06", time: "14:00" },
  { date: "2026-02-06", time: "15:00" },
  { date: "2026-02-06", time: "16:00" },
  { date: "2026-02-06", time: "17:00" },
  { date: "2026-02-06", time: "18:00" },
  { date: "2026-02-06", time: "19:00" },
  { date: "2026-02-07", time: "10:00" },
  { date: "2026-02-07", time: "11:00" },
  { date: "2026-02-07", time: "12:00" },
  { date: "2026-02-07", time: "13:00" },
  { date: "2026-02-07", time: "14:00" },
  { date: "2026-02-07", time: "15:00" },
  { date: "2026-02-07", time: "16:00" },
  { date: "2026-02-07", time: "17:00" },
  { date: "2026-02-07", time: "18:00" },
  { date: "2026-02-07", time: "19:00" },
  { date: "2026-02-08", time: "10:00" },
  { date: "2026-02-08", time: "11:00" },
  { date: "2026-02-08", time: "12:00" },
  { date: "2026-02-08", time: "13:00" },
  { date: "2026-02-08", time: "14:00" },
  { date: "2026-02-08", time: "15:00" },
  { date: "2026-02-08", time: "16:00" },
  { date: "2026-02-08", time: "17:00" },
  { date: "2026-02-08", time: "18:00" },
  { date: "2026-02-08", time: "19:00" },
  { date: "2026-02-09", time: "10:00" },
  { date: "2026-02-09", time: "11:00" },
  { date: "2026-02-09", time: "12:00" },
  { date: "2026-02-09", time: "13:00" },
  { date: "2026-02-09", time: "14:00" },
  { date: "2026-02-09", time: "15:00" },
  { date: "2026-02-09", time: "16:00" },
  { date: "2026-02-09", time: "17:00" },
  { date: "2026-02-09", time: "18:00" },
  { date: "2026-02-09", time: "19:00" },
  { date: "2026-02-10", time: "10:00" },
  { date: "2026-02-10", time: "11:00" },
  { date: "2026-02-10", time: "12:00" },
  { date: "2026-02-10", time: "13:00" },
  { date: "2026-02-10", time: "14:00" },
  { date: "2026-02-10", time: "15:00" },
  { date: "2026-02-10", time: "16:00" },
  { date: "2026-02-10", time: "17:00" },
  { date: "2026-02-10", time: "18:00" },
  { date: "2026-02-10", time: "19:00" },
  { date: "2026-02-11", time: "10:00" },
  { date: "2026-02-11", time: "11:00" },
  { date: "2026-02-11", time: "12:00" },
  { date: "2026-02-11", time: "13:00" },
  { date: "2026-02-11", time: "14:00" },
  { date: "2026-02-11", time: "15:00" },
  { date: "2026-02-11", time: "16:00" },
  { date: "2026-02-11", time: "17:00" },
  { date: "2026-02-11", time: "18:00" },
  { date: "2026-02-11", time: "19:00" },
  { date: "2026-02-12", time: "10:00" },
  { date: "2026-02-12", time: "11:00" },
  { date: "2026-02-12", time: "12:00" },
  { date: "2026-02-12", time: "13:00" },
  { date: "2026-02-12", time: "14:00" },
  { date: "2026-02-12", time: "15:00" },
  { date: "2026-02-12", time: "16:00" },
  { date: "2026-02-12", time: "17:00" },
  { date: "2026-02-12", time: "18:00" },
  { date: "2026-02-12", time: "19:00" }
];

const insert = db.prepare(`
  INSERT INTO time_slots (date, time, isActive)
  VALUES (?, ?, 1)
`);

// Используем транзакцию, чтобы добавить все сразу
const insertAll = db.transaction((slots) => {
  slots.forEach(s => insert.run(s.date, s.time));
});

insertAll(testSlots);

console.log("Тестовые слоты добавлены");
}

// add()

// Экспортируем db
module.exports = db;