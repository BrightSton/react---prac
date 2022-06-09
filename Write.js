import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Write = () => {
  const navigate = useNavigate();
  /*   const uploadFB = async (e) => {
    console.log(e.target.files);
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    console.log(uploaded_file);
    const file_url = await getDownloadURL(uploaded_file.ref);

    console.log(file_url);
    file_link_ref.current = { url: file_url };
  }; */

  return (
    <div>
      <h1>게시글 작성</h1>
      이미지 : <input type="file" /* onChange={uploadFB} */ />
      <br />
      게시글 : <input placeholder="게시글을 작성해 주세요!" type="text" />
      <br />
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        게시글 작성
      </Button>
    </div>
  );
};

const Button = styled.button`
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
export default Write;
