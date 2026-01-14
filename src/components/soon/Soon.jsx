import React from "react";
import "./soon.css";

function Soon() {
  return (
    <div className="Not">
      <div className="container">
        <div className="code">🚧</div>
        <h1 className="title">Страница в разработке</h1>
        <p className="subtitle">
          Мы активно работаем над созданием этой страницы.<br />
          Скоро здесь появится что-то интересное!
        </p>
        <button 
          className="btn"
          onClick={() => window.history.back()}
        >
          ← Вернуться назад
        </button>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="progress-text">Идет разработка...</span>
        </div>
      </div>
    </div>
  );
}

export default Soon;