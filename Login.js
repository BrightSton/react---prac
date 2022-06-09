import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

/* import { auth, db } from "./shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, where, query, collection } from "firebase/firestore"; */
const Login = () => {
  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const navigate = useNavigate();

  /*   const loginFB = async () => {
    console.log(id_ref.current.value, pw_ref.current.value);
    const user = await signInWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
    console.log(user);
    const user_docs = await getDocs(
      query(collection(db, "users"), where("user_id", "==", user.user.email))
    );
    user_docs.forEach((u) => {
      console.log(u.data());
    });
  }; */
  return (
    <>
      <h1>로그인</h1>
      <div>
        <h3>아이디 (이메일)</h3>
        <input ref={id_ref} placeholder="이메일 적으세요" /> <br />
        <h3>비밀번호</h3>
        <input ref={pw_ref} placeholder="비밀번호 적으세요" /> <br />
        <Button
          /* onClick={loginFB} */ onClick={() => {
            navigate("/");
          }}
        >
          로그인
        </Button>
      </div>
    </>
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
export default Login;
