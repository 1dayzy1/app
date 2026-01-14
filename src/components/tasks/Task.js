import React, { useEffect, useState } from "react";
import "./task.css";
import axios from "axios";

function Task() {
  let [item, setItems] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const req = await axios.get("https://fc72acdaf3f6b3b2.mokky.dev/task");

        setItems(req.data);
      } catch (error) {
        console.error("Ошибка при получении данных: ", error)
      }

      
    };

    fetchTask();
  }, []);


  

  return (
    <div className="block">
      <div className="Logo">
        <img src="/logo.png" width={70} alt="Logo" />
        FrontendByHeart
      </div>
      <p className="desc-task">Привет, здесь ты можешь выбрать задачу!)</p>

      <div className="container-btns">
        <button className="btnTask-theme active">Все</button>
        <button className="btnTask-theme">HTML</button>
        <button className="btnTask-theme">CSS</button>
        <button className="btnTask-theme">JavaScript</button>
      </div>

      <div className="container-tasks">
        {item.map((el) => (
          <div className={el.class} key={el.id}>
            <div className="lvl-block">
              <div className="icon-task">
                <img src={el.language_path} className="color-icon" width={50} height={50} />
              </div>

              <div className={el.level}>{el.lvl_text}</div>
            </div>

            <div className="description-block">
              <h2 className="title-task">{el.title}</h2>

              <p className="desc-task">
                {el.desc}
              </p>
            </div>

            <button className="btn-task">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                class="arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
