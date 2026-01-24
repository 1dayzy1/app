import React from "react";
import "./notstudent.css";

function NotStudent({ username }) {
  return (
    <div className="ns-wrapper">
      <div className="ns-card">
        <div className="ns-icon">🔒</div>

        <h1 className="ns-title">
          Доступ ограничен
        </h1>

        <p className="ns-text">
          Привет{username ? `, ${username}` : ""}!  
          Запись на уроки доступна только для моих учеников.
        </p>

        <p className="ns-subtext">
          Если ты хочешь начать обучение или задать вопрос —
          напиши мне, и я расскажу все детали 👇
        </p>

        <a
          href="https://www.avito.ru/moskva/predlozheniya_uslug/obuchenie_sozdaniyu_saytov_7711816035"
          target="_blank"
          rel="noreferrer"
        >
          <button className="ns-btn">
            Написать преподавателю
          </button>
        </a>

        <p className="ns-footer">
          После подтверждения ты сразу сможешь записываться на уроки
        </p>
      </div>
    </div>
  );
}

export default NotStudent;
