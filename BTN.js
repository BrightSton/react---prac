import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const BTN = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/write");
      }}
    >
      글쓰기
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  width: 80px;
  height: 70px;
  bottom: 30px;
  position: fixed;
  right: 50px;
  border: none;
  border-radius: 20px;
  background: #7fbcff;
  color: #fff;
  text-align: justify center;
  line-height: 70px;
  font-weight: bold;
  font-size: 16px;
`;
export default BTN;
