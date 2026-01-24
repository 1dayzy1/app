import React, { useEffect, useState } from "react";
import "./apoint.css";
import axios from "axios";
import { NavLink } from "react-router";
import NotStudent from "../notStudent/NotStudent";
import { useNavigate } from "react-router";

function Apoint() {
  let [apoint, setApoint] = useState([]);
  let [userid, setUserid] = useState(null);
  let [isStudent, setIsstudent] = useState(null);
  let [comment, setComment] = useState([]);
  let tg = window.Telegram.WebApp;
  const location = useNavigate();

  let username = tg.initDataUnsafe?.user?.username || "test";

  useEffect(() => {
    const checkStudent = async () => {
      const res = await axios.get("http://localhost:9000/api/user/", {
        params: { name: username },
      });

      if (res.data.isStudent) {
        setIsstudent(res.data.isStudent);
        setUserid(res.data.id.id);
      } else {
        console.log("Нет студента");
      }

      if (userid) {
        const apointget = await axios.get("http://localhost:9000/api/apoint", {
          params: { id: userid },
        });

        console.log(apointget.data);
        setApoint(apointget.data.arr_apoint);
      } else {
        console.log("non");
      }
    };
    checkStudent();
  }, [userid]);

  const cancelSlot = async (e) => {
    const slotId = e.target.value;
    
    console.log(slotId);

    const del = await axios.delete(
      `http://localhost:9000/api/delete/slot?id=${slotId}`,
    );
    window.location.reload();

    // console.log(e.target.value)
  };

  // useEffect(() =>{

  //   const getApoint = async () => {
  //     try {

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getApoint()

  // }, [])

  return (
    <div>
      <div class="block">
        <div class="Logo">
          <img src="/logo.svg" width="120" alt="Logo" />
          FrontendByHeart
        </div>
        <p class="desc">Ваши записи на уроки</p>

        {isStudent ? (
          <div>
            <div class="sign-block">
              <p class="sign-text1">Мои записи</p>
              <p class="page-text"></p>
            </div>

            {apoint.length >= 1 ? (
              <div className="block-select">
                {apoint.map((el) => (
                  <div class="select-time" key={el.id}>
                    <div class="appointment-card">
                      <p class="date">📅 {el.date} </p>
                      <p>⏰ {el.time}</p>
                      <p>Комментарий: {el.comment || "Отсутствует"} </p>
                    </div>

                    <button
                      className="cancel-btn"
                      value={el.id}
                      onClick={cancelSlot}
                    >
                      Отменить
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <div class="block">
                  <div class="no-appointments-container">
                    <div class="icon-container">📅</div>

                    <h2 class="no-appointments-title">
                      Нет запланированных уроков
                    </h2>

                    <p class="no-appointments-description">
                      У вас пока нет записей на уроки. Запланируйте свое первое
                      занятие и начните обучение прямо сейчас!
                    </p>

                    <div class="action-buttons">
                      <NavLink to={"/sign"}>
                        <button className="btn-primary">
                          Записаться на урок
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <NotStudent />
        )}
      </div>
    </div>
  );
}

export default Apoint;
