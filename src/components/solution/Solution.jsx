import React, { useState } from "react";
import "./Solution.css";
import { useLocation } from "react-router-dom";
import Success from "../checkTask/Success";
import Error from "../checkTask/Error";
import Test from "./Test";

function Solution() {
  let [code, setCode] = useState("");
  const location = useLocation();
  let [modalcls, setModalcls] = useState("modal-block");
  // let[result, setResult] = useState('');
  let [fedcls, setFedcls] = useState("block-feedback");
  let [fedclser, setFedclser] = useState("block-feedback-er");
  // let[modal, setModal] = useState(false);
  // console.log(location)

  const { item } = location.state || {};

  // console.log(item)

  const openModal = () => {
    setModalcls("modal-block active");
  };

  const closeModal = () => {
    setModalcls("modal-block");
  };

  const resetText = () => {
    setCode("");
  };

  const handlChange = (e) => {
    setCode(e.target.value);
  };

  const checkTask = () => {
    // console.log(item.code)
    // const correct = "Привет"
    try {
      // setFedcls('block-feedback');
      // setFedclser('block-feedback-er');

      if (item.lang === "js") {
        let output = "";

        const consoleBackup = console.log;

        console.log = (msg) => {
          output += msg;
        };

        let sanitizedCode = code.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
        eval(sanitizedCode);

        console.log = consoleBackup;

        // console.log("Привет")
        if (output === item.code) {
          // setResult('Правильно');
          setFedcls("block-feedback active");
          setFedclser("block-feedback-er");
        } else {
          // setResult("Неправильно");
          setFedclser("block-feedback-er active");
          setFedcls("block-feedback");
        }
      }

      if (
        item.lang === "html" ||
        item.lang === "html-css" ||
        item.lang === "css"
      ) {
        const iframe = document.createElement("iframe");

        iframe.style.display = "none";
        document.body.appendChild(iframe);

        const doc = iframe.contentDocument;

        doc.open();
        doc.write(code);
        doc.close();

        

        const checks = item.checks || [
          {
            selector: item.selector,
            styles:item.styles
          }
        ]


        for(let chack of checks){
          const element = doc.querySelector(chack.selector);

          if (!element) {
            setFedclser("block-feedback-er active");
            setFedcls("block-feedback");
            iframe.remove();
            return;
          }

          if (chack.styles) {
            const styles = getComputedStyle(element);
            for (let prop in chack.styles) {
              if (styles[prop] !== chack.styles[prop]) {
                setFedclser("block-feedback-er active");
                setFedcls("block-feedback");
                iframe.remove();
                return;
              }
            }
          }

          

        }

        

        

        setFedcls("block-feedback active");
        setFedclser("block-feedback-er");

        iframe.remove();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="block">
      {/* <div className="Logo">
        <img src="./logo.svg" width={70} alt="Logo" />
        FrontendByHeart
      </div> */}

      <div className={modalcls}>
        <div className="modal-blocks">
          <div className="modal-headers">
            <h2 className="title-modal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="lamp"
                viewBox="0 0 16 16"
              >
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
              </svg>
              Подсказка
            </h2>

            <button className="btn-close" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>

          <div className="modal-contents">
            <p className="clue-text"></p>

            <ul className="list-Item">
              {item.clue.map((el,index) => (
                <li className="itemList" key={index}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="icon-back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="arrow-left"
          viewBox="0 0 16 16"
          onClick={() => window.history.back()}
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>

        <h1 className="title-task">{item.title_full}</h1>
      </div>

      <div className="solution-block">
        <div className="solution-header">
          <div className="id-task">Задача {item.id}</div>
          <div className={item.level}>• {item.lvl_text}</div>
        </div>

        <h2 className="title-task-example">{item.title}</h2>
        <p className="desc-task-example">{item.desc}</p>

        {
          item.type === "code" ? <div>

<div className="code-example">
          {item.primer.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < item.primer.split("\n").length - 1 && <br />}
            </span>
          ))}
        </div>

        <div className="container-title-editor">
          <h3 className="text-sol">Ваше решение:</h3>

          <button className="btn-clue" onClick={openModal}>
            Подсказка
          </button>
        </div>

        <div className="code-editor">
          <div class="editor-header">
            <span>{item.lang_code}</span>
            <button class="btn-reset" id="resetBtn" onClick={resetText}>
              Очистить
            </button>
          </div>

          <textarea
            id="codeInput"
            className="code-input"
            placeholder="// Твой код здесь"
            onChange={handlChange}
            value={code}
          ></textarea>
        </div>

        <button className="btn-check-sol" onClick={checkTask}>
          Проверить решение
        </button>

          </div> : <Test item={item.variant} otv={item}/>
        }

        {fedclser.includes("active") && <Error cls={fedclser} />}
        
        
        {fedcls.includes("active") && <Success cls={fedcls} />}

          

      </div>
    </div>
  );
}

export default Solution;
