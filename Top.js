import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const Top = () => {
  const navigate = useNavigate();
  return (
    <>
      <Home>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          홈
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </button>
      </Home>
    </>
  );
};

const Home = styled.div`
  max-width: 90vh;
  min-height: 30px;
  padding: 26px;
  margin: 30px auto;
  border: none;
  background: #edf3c3;
  .button {
    margin: ;
  }
`;

export default Top;
