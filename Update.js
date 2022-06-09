import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const update_ref = React.useRef();

  return (
    <>
      <Content>
        <h1>게시글 수정하기</h1>
        <hr />
        <h3>이미지 변경</h3>
        <ImgUpload>
          <input type="file" />
        </ImgUpload>
        <h3>게시글 수정</h3>
        <ContentTextArea
          type="text"
          placeholder="게시글 수정"
          ref={update_ref}
        />
        <BtnWrap>
          <Btn
            onClick={() => {
              navigate("/");
            }}
          >
            게시글 수정
          </Btn>
        </BtnWrap>
      </Content>
    </>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ImgUpload = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Btn = styled.button`
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  margin-top: 50px;
  height: 30px;
  font-size: 20px;
  background-color: white;
  &:hover {
    background-color: lightgrey;
  }
`;
const ContentTextArea = styled.textarea`
  min-width: 40vw;
  min-height: 20vh;
  text-align: left;
`;
export default Update;
