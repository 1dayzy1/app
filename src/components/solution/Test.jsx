import React, { useState } from 'react'

function Test({ item, otv }) {
  const [selected, setSelected] = useState(null);
  let[isAnswer, setIsAnswer] = useState(false);

  const checkTest = (value) => {
    if(isAnswer) return;


    setSelected(value)
    setIsAnswer(true)
  }

  return (
    <div className='container-btn-var'>
      {item.map((el) => {
        let className = 'btn-var'

        if(isAnswer && el === otv.otvet){
            className += " cor"
        }

        if(isAnswer && el === selected && el !== otv.otvet){
            className += " incor";
        }

        return (
          <button
            key={el}
            onClick={() => checkTest(el)}
            className={className}
            disabled={isAnswer}
          >
            {el}
          </button>
        )
      })}
    </div>
  )
}

export default Test