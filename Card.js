import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { loadBoxFB, addBoxFB } from "./redux/modules/cardBox";

const Card = (props) => {
  const wordText = React.useRef(null);
  const meanText = React.useRef(null);
  const exampleText = React.useRef(null);

  const dispatch = useDispatch();

  const addBoxList = () => {
    const lists = {
      word: wordText.current.value,
      mean: meanText.current.value,
      example: exampleText.current.value,
      completed: false,
    };
    dispatch(addBoxFB(lists));
  };

  return (
    <>
      <div>
        <Link to="/">
          <h1>한글 단어장</h1>
        </Link>
        <hr />
        <h3>단어 추가하기</h3>
        <div>
          <p>단어</p>
          <input type="text" ref={wordText} />
          <p>의미</p>
          <input type="text" ref={meanText} />
          <p>예시</p>
          <input type="text" ref={exampleText} />
        </div>
        <button onClick={addBoxList}>저장하기</button>
      </div>
    </>
  );
};

export default Card;
