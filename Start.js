import React from "react";
import { useParams, useHistory } from "react-router-dom";
//import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { loadBoxFB, updateBoxFB, deleteBoxFB } from "./redux/modules/cardBox";
import { db } from "./firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const Start = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const box_index = params.index;

  React.useEffect(() => {
    console.log(db);
    dispatch(loadBoxFB());
  }, []);

  const my_lists = useSelector((state) => state.cardBox.list);
  console.log(my_lists);
  return (
    <>
      <div>
        <h1>한글 단어장</h1>
        <hr />
        {my_lists.map((list, index) => {
          return (
            <div className="list_item" key={index}>
              <p>단어:{list.word}</p>
              <p>뜻:{list.mean}</p>
              <p>예시:{list.example}</p>
              <div>
                <button
                /* onClick={() => {
                    dispatch(updateBoxFB(my_lists[box_index].id));
                    console.log();
                  }} */
                >
                  완료
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteBoxFB(my_lists[index].id));
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          );
        })}
        <button
          /* className="BTN" */
          onClick={() => {
            history.push("/card");
          }}
        >
          글쓰기
        </button>
      </div>
    </>
  );
};

export default Start;
