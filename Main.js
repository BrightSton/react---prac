import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BTN from "../BTN";
import Content from "../Content";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Content />
      </Box>
      <BTN />
    </>
  );
};

const Box = styled.div`
  width: 53rem;
  height: 50rem;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 30px auto;
`;

export default Main;
