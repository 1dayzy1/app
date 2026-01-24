import React, { useEffect, useState } from "react";
import "./sign.css";
import axios from "axios";
import Main from "../main/Main";
import NotStudent from "../notStudent/NotStudent";
// import axios from 'axios';

function Sig() {
  let tg = window.Telegram.WebApp;

  let username = tg.initDataUnsafe?.user?.username || "test";

  useEffect(() => {
    const checkStudent = async () => {
      const res = await axios.get("http://localhost:9000/api/user/", {
        params: { name: username },
      });

      console.log(res.data);

      
      if(res.data.isStudent){
        setStudent(res.data.isStudent);
        setUserid(res.data.id.id);
      }else{
        console.log("Нет студента")
      }
      
    };

    checkStudent();
  }, []);

  // Получаем текущую дату
  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0];

  // Вычисляем максимальную дату (30 дней вперед)
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);
  const maxDateFormatted = maxDate.toISOString().split("T")[0];

  const [time, setTime] = useState([]);
  const [student, setStudent] = useState(null);
  let [userid, setUserid] = useState(null);
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [comment, setComment] = useState("");
  const [dataError, setDataError] = useState("");
  const [idSlot, setIdslot] = useState("");
  const[modal, setModal] = useState(false);

  const changedate = async (e) => {
    const selectedDate = e.target.value;

    const req = await axios.get(`http://localhost:9000/api/slots`, {
      params: { date: selectedDate },
    });

    console.log(req.data);

    setTime(req.data);
    setDate(selectedDate);
    

    if (selectedDate < todayFormatted) {
      setDataError("Нельзя выбрать прошлую дату");
    } else if (selectedDate > maxDateFormatted) {
      setDataError("Нельзя записаться больше месяца вперед");
    } else {
      setDataError("");
    }
  };

  
  const changecomment = (e) => {
    setComment(e.target.value);
  };

  const changetime = (e) => {
    const selectedId = e.target.value;
    const selectedText =
    e.target.options[e.target.selectedIndex].text;

    setIdslot(selectedId);
    setTimes(selectedText);

    console.log(selectedId)
    console.log(selectedText)

  };

  

  const closeModal = () => {
    setModal(false)
  };

  const submitBtn = async () => {
    console.log("ter1");
    if ((times && date) || (times && date && comment)) {
      console.log("ter2");
      const add = await axios.post("http://localhost:9000/api/add/slots/", {
        id_slots: idSlot,
        id: userid,
        text:comment
      });
      
      

    } 

    setModal(true);
  };

  return (
    <div className="block">
      <div className="Logo">
        <img src="/logo.svg" width={120} alt="Logo" />
        FrontendByHeart
      </div>
      <p className="desc">Записывайся на уроки удобно</p>
      <div className="sign-block">
        <div>
          <p className="sign-text1">Записаться на урок</p>

          <p className="sign-text2">Выберите время и дату записи</p>
        </div>

        <div>
          <p className="page-text">Шаг 1/1</p>
        </div>
      </div>

      {student ? (
        <div>
          <div className="select-time">
            <p className="date">📅 Выберите дату:</p>

            <input
              type="date"
              id="date"
              onChange={changedate}
              min={todayFormatted}
              max={maxDateFormatted}
              required
            />

            {dataError && <div>{dataError}</div>}

            <p className="date" key={1}>
              ⏰ Выберите время:
            </p>

            <select className="list" onChange={changetime} required>
              <option value="">-- Выберите время --</option>
              {time.map((item) => (
                <option key={item.id} className="list" value={item.id}>
                  {item.time}
                </option>
              ))}
            </select>

            <p className="date">Комментарий(необязательно)</p>

            <textarea
              placeholder="Например: хочу выполнить повторение"
              className="comment"
              onChange={changecomment}
            ></textarea>

            <br />

            <button
              className="btn-zapis"
              onClick={submitBtn}
              disabled={dataError}
            >
              Записаться
            </button>
          </div>
        </div>
      ) : (
        <div>
          <NotStudent username={username} />
        </div>
      )}

      {
        modal && (
          <div id="modal" class="modal">
        {/* <div class="modal-backdrop"></div> */}
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-icon">🗓️</div>
            <div>
              <div class="modal-title">Ваша запись</div>
              <div class="modal-subtitle">Детали урока</div>
            </div>
            <button class="modal-close" onClick={closeModal} id="modal-close">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-row">
              <span class="modal-label">Дата:</span>
              <span id="modal-datetime" class="modal-value">
                {date}
              </span>
            </div>

            <div class="modal-row">
              <span class="modal-label">Время:</span>
              <span id="modal-datetime" class="modal-value">
                {times}
              </span>
            </div>
            <div class="modal-row">
              <span class="modal-label">Комментарий:</span>
              <span id="modal-notes" class="modal-value">
                {comment}
              </span>
            </div>
          </div>
        </div>
      </div>
        )
      }
    </div>
  );
}

export default Sig;
