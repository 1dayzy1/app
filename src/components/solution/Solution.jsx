import React from "react";
import "./Solution.css";

function Solution() {
  return (
    <div className="block">
      {/* <div className="Logo">
        <img src="./logo.svg" width={70} alt="Logo" />
        FrontendByHeart
      </div> */}

      <div className="icon-back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>

        <h1 className="title-task">JavaScript: Массивы</h1>
      </div>

      <div className="solution-block">
        <div className="solution-header">
          <div className="id-task">Задача 4</div>
          <div className="lvl-task easy">• Легкая</div>
        </div>

        <h2 className="title-task-example">Найти сумму элементов массива</h2>
        <p className="desc-task-example">
          Напишите функцию sumArray, которая принимает массив чисел и возвращает
          их сумму.
        </p>

        <div className="code-example">
          // Пример использования: <br />
          console.log(sumArray([1, 2, 3, 4])); // Должно вернуть: 10
          <br />
          console.log(sumArray([10, -5, 7])); // Должно вернуть: 12
          <br />
        </div>

        <div className="container-title-editor">
          <h3 className="text-sol">Ваше решение:</h3>

          <button className="btn-clue">Подсказка</button>
        </div>

        <div className="code-editor">
          <div class="editor-header">
            <span>JavaScript</span>
            <button class="btn-reset" id="resetBtn">
              Очистить
            </button>
          </div>

          <textarea
            id="codeInput"
            class="code-input"
            placeholder="function sumArray(arr) {
                // Ваш код здесь
            }"
          >
            
          </textarea>


        </div>

        <button className="btn-check-sol">Проверить решение</button>


      </div>
    </div>
  );
}

export default Solution;
