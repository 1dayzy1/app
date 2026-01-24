const express = require("express");
const path = require("path");
const app = express();
const db = require("./db.js");
const cors = require("cors");
const { chownSync } = require("fs");

app.use(express.json());
app.use(cors());

let students = ["test","Dayzy_sr"];

app.get("/", (req, res) => {
  // console.log("acitve")
  res.send("Activate");
});

app.get("/api/slots", (req, res) => {
  const { date } = req.query;
  // console.log(date)
  const slots = db
    .prepare(
      `
    SELECT id,time
    FROM time_slots
    WHERE date = ? AND isActive = 1
    ORDER BY time
    `,
    )
    .all(date);
  // console.log(slots)
  res.json(slots);
});

app.get("/api/users", (req, res) => {
  try {
    const find_user = db.prepare("SELECT * FROM students").all();
    // console.log(find_user);

    // console.log(user);

    res.status(200).json(find_user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/user/", (req, res) => {
  try {
    const { name } = req.query;

    const id = db
      .prepare(
        `
    SELECT id FROM students WHERE username = ?
    `,
      )
      .get(name);

    // console.log(id);

    for (let i = 0; i < students.length; i++) {
      if (students[i] === name) {
        res.json({
          isStudent: true,
          id,
        });
      } else {
        res.json({
          isStudent: false,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }

  // console.log(name);
});

app.post("/api/add/", (req, res) => {
  try {
    const { name } = req.body;
    // console.log(`get name: ${name}`);

    db.prepare(
      `
    INSERT INTO students (username) VALUES (?)
    `,
    ).run(name);

    res.status(200).json({
      msg: "Имя записано",
    });

    console.log(`Имя записано:${name}`);
  } catch (error) {
    // if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
    //   return res.status(409).json({
    //     msg: "Пользователь уже существует"
    //   });
    // }
  }

  return;
});

app.post("/api/add/slots/", (req, res) => {
  try {
    const { id_slots, id, text } = req.body;

    console.log(`слот id:${id_slots}`);
    console.log(`userid:${id}`);
    console.log(`text:${text}`);

    const upd = db
      .prepare(
        `
        
        UPDATE time_slots SET isActive = ? WHERE id = ?

        `,
      )
      .run(0, id_slots);

    const addSlot = db
      .prepare(
        `
    INSERT INTO student_slots(student_id, slot_id,comment) VALUES (?, ?, ?) 

    `,
      )
      .run(id, id_slots, text);

    console.log("Слот добавлен!");

    res.status(200).json({
      msg: "Добавленно",
    });
  } catch (error) {
    console.error(error);
  }
});


app.delete("/api/delete/slot", (req, res) =>{
  try {
    const {id} = req.query;
    console.log(id);

    const delSlot = db.prepare(`
      DELETE FROM student_slots WHERE slot_id = ?
      `).run(id);

    const delUS = db.prepare(`
      UPDATE time_slots SET isActive = 1
      `).run();

      res.status(200).json({
        suc:"True"
      })

  } catch (error) {
    console.log(error)
  }

})

app.get("/api/apoint/", (req, res) => {
  try {
    const { id } = req.query;

    console.log(`userid:${id}`);

    const apoint = db
      .prepare(
        `
      SELECT slot_id,comment FROM student_slots WHERE student_id = ?
      `,
      )
      .all(id);
    console.log(apoint);
    const arr_apoint = [];
    const comm = [];
    for (let i = 0; i < apoint.length; i++) {
      // console.log(apoint[i].slot_id);

      const getApoint = db
        .prepare(
          `
          SELECT date,time,id FROM time_slots WHERE id = ?
          `,
        )
        .get(apoint[i].slot_id);

      arr_apoint.push({
        id: getApoint.id,
        date: getApoint.date,
        time: getApoint.time,
        comment: apoint[i].comment,
      });
    }

    // arr_apoint.push(apoint);

    console.log(arr_apoint);

    res.status(200).json({
      arr_apoint,
      // comm
    });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/delete", (req, res) => {
  try {
    const { id } = req.body;

    const delet = db
      .prepare(
        `
      DELETE FROM students where id = ?
      `,
      )
      .run(id);

    res.status(200).json({
      msg: "Пользователь удален",
    });
  } catch (error) {
    res.json({
      msg: error,
    });
  }
});

app.listen(9000, () => {
  console.log("server started!");
});
